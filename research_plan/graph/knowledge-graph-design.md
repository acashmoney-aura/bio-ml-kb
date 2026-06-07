# Bio ML knowledge graph design

Updated: 2026-06-07

This repo uses a markdown-native graph workflow rather than a full ontology-first workflow.

## Why

For a literature-heavy comp-bio repo, the useful middle layer is:
- markdown notes as source of truth
- frontmatter metadata for entities, sources, and relations
- a lightweight mediator that emits graph artifacts

## What the graph should represent

- methods and benchmarks
- research themes
- project ideas
- failure modes and evaluation warnings
- links between papers, ideas, and actionable directions

## Current graph path

Markdown frontmatter -> `scripts/build_markdown_graph.js` -> graph JSON / Mermaid / Pages data.
