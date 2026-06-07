# Bio ML Knowledge Base

A markdown-native knowledge base for computational biology, genomics, biological ML, virtual-cell systems, spatial omics, protein design, and project ideas.

## Focus

- genomics and biological ML
- virtual cells / simulated nucleus directions
- interpretable and structure-aware bio-ML
- spatial single-cell and tissue geometry
- protein design under real experimental constraints
- disease modeling with mechanistic or anatomically legible structure
- project ideas that are actually plausible for Akash to build or study

## Intended workflow

1. capture papers, project pages, and notes into `topics/inbox/`
2. add markdown frontmatter metadata to notes (`title`, `kind`, `topics`, `entities`, `entity_metadata`, `sources`, `relations`)
3. turn raw captures into synthesis notes in `topics/notes/`
4. build lightweight graph artifacts from markdown metadata with `node scripts/build_markdown_graph.js`
5. use git history as the research trail

## Key files

- `topics/brief.md`
- `topics/notes/virtual-cells-and-genomics-ml.md`
- `topics/notes/structure-aware-biological-ml.md`
- `topics/notes/project-ideas.md`
- `research_plan/source_registry.md`
- `research_plan/graph/knowledge-graph-design.md`
- `research_plan/graph/markdown-metadata-schema.md`
- `docs/index.html`
