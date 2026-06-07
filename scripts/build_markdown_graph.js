#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const repoRoot = path.resolve(__dirname, '..');
const graphDir = path.join(repoRoot, 'research_plan', 'graph');
const docsDataDir = path.join(repoRoot, 'docs', 'data');
function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}
function parseScalar(v) { v = String(v).trim(); if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) return v.slice(1,-1); return v; }
function parseFrontmatter(text) {
  if (!text.startsWith('---\n')) return null;
  const end = text.indexOf('\n---\n', 4);
  if (end === -1) return null;
  const raw = text.slice(4, end);
  const data = {};
  const lines = raw.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!match) { i++; continue; }
    const key = match[1];
    const rest = match[2] ?? '';
    if (rest.trim()) { data[key] = parseScalar(rest); i++; continue; }
    i++;
    const list = [];
    while (i < lines.length) {
      const next = lines[i];
      if (!next.startsWith('  - ')) break;
      const itemText = next.slice(4);
      const kv = !/^https?:\/\//.test(itemText) && itemText.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
      if (kv) {
        const obj = { [kv[1]]: parseScalar(kv[2]) };
        i++;
        while (i < lines.length) {
          const sub = lines[i];
          const subkv = sub.match(/^\s{4}([A-Za-z0-9_-]+):\s*(.*)$/);
          if (!subkv) break;
          obj[subkv[1]] = parseScalar(subkv[2]);
          i++;
        }
        list.push(obj);
      } else { list.push(parseScalar(itemText)); i++; }
    }
    data[key] = list;
  }
  return data;
}
function slugify(v){ return String(v).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'item'; }
function addNode(map, id, payload){ map.set(id, { ...(map.get(id)||{id}), ...payload, id}); }
function addEdge(map, from, type, to, meta={}){ const id=`${from}::${type}::${to}`; if(!map.has(id)) map.set(id,{id,from,type,to,...meta}); }
const nodes = new Map();
const edges = new Map();
const docs = [];
for (const file of walk(repoRoot)) {
  const parsed = parseFrontmatter(fs.readFileSync(file, 'utf8'));
  if (!parsed) continue;
  const relPath = path.relative(repoRoot, file);
  const title = parsed.title || path.basename(file, '.md');
  const kind = parsed.kind || parsed.type || 'document';
  const docId = `doc:${relPath}`;
  docs.push({ title, kind, path: relPath, data: parsed });
  addNode(nodes, docId, { label: title, nodeType: 'document', kind, path: relPath, updated: parsed.updated || parsed.captured_at || null });
  for (const topic of parsed.topics || []) { const id=`topic:${slugify(topic)}`; addNode(nodes,id,{label:topic,nodeType:'topic'}); addEdge(edges,docId,'has_topic',id,{source:relPath}); }
  const entityMeta = new Map();
  for (const e of parsed.entities || []) entityMeta.set(String(e), { name: String(e), entity_type: 'Concept' });
  for (const item of parsed.entity_metadata || []) if (item?.name) entityMeta.set(String(item.name), { name: String(item.name), entity_type: item.entity_type || 'Concept' });
  for (const meta of entityMeta.values()) { const id=`entity:${slugify(meta.name)}`; addNode(nodes,id,{label:meta.name,nodeType:'entity',entityType:meta.entity_type}); addEdge(edges,docId,'mentions',id,{source:relPath}); }
  for (const src of [...new Set([...(parsed.sources||[]), parsed.url].filter(Boolean))]) { const id=`source:${slugify(src)}`; addNode(nodes,id,{label:src,nodeType:'source',url:src}); addEdge(edges,docId,'cites',id,{source:relPath}); }
  for (const rel of parsed.relations || []) { if (!rel.from || !rel.type || !rel.to) continue; const from=`entity:${slugify(rel.from)}`; const to=`entity:${slugify(rel.to)}`; addNode(nodes,from,{label:rel.from,nodeType:'entity'}); addNode(nodes,to,{label:rel.to,nodeType:'entity'}); addEdge(edges,from,rel.type,to,{source:relPath}); }
}
const docsSorted = docs.slice().sort((a, b) => a.path.localeCompare(b.path));
const generatedAt = docsSorted
  .map(doc => doc.data.updated || null)
  .filter(Boolean)
  .sort()
  .at(-1) || 'unknown';
const graph = { generatedAt, counts: { nodes:nodes.size, edges:edges.size, documents:docs.length }, nodes:[...nodes.values()].sort((a,b)=>a.id.localeCompare(b.id)), edges:[...edges.values()].sort((a,b)=>a.id.localeCompare(b.id)) };
graph.nodeTypeCounts = graph.nodes.reduce((a,n)=>((a[n.nodeType||'unknown']=(a[n.nodeType||'unknown']||0)+1),a),{});
graph.entityTypeCounts = graph.nodes.filter(n=>n.nodeType==='entity').reduce((a,n)=>((a[n.entityType||'Unspecified']=(a[n.entityType||'Unspecified']||0)+1),a),{});
fs.mkdirSync(graphDir,{recursive:true}); fs.mkdirSync(docsDataDir,{recursive:true});
fs.writeFileSync(path.join(graphDir,'graph.json'), JSON.stringify(graph,null,2)+'\n');
fs.writeFileSync(path.join(docsDataDir,'graph.json'), JSON.stringify(graph,null,2)+'\n');
const mmd = ['graph TD', ...graph.edges.map(edge => { const from=nodes.get(edge.from); const to=nodes.get(edge.to); return `  ${edge.from.replace(/[^A-Za-z0-9]/g,'_')}["${String(from.label).replace(/"/g,'\\"')}"] -->|${edge.type}| ${edge.to.replace(/[^A-Za-z0-9]/g,'_')}["${String(to.label).replace(/"/g,'\\"')}"]`; })].join('\n') + '\n';
fs.writeFileSync(path.join(graphDir,'graph.mmd'), mmd); fs.writeFileSync(path.join(docsDataDir,'graph.mmd'), mmd);
const summary = ['# Markdown graph summary','',`Generated: ${graph.generatedAt}`,'',`- Documents: ${graph.counts.documents}`,`- Nodes: ${graph.counts.nodes}`,`- Edges: ${graph.counts.edges}`,'','## Entity types','',...Object.entries(graph.entityTypeCounts).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`- ${k}: ${v}`),''];
fs.writeFileSync(path.join(graphDir,'summary.md'), summary.join('\n')+'\n'); fs.writeFileSync(path.join(docsDataDir,'summary.md'), summary.join('\n')+'\n');
console.log(JSON.stringify(graph.counts,null,2));
