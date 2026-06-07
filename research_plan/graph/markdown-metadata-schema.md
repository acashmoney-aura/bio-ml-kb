# Markdown metadata schema for the bio ML KB

Updated: 2026-06-07

This repo uses markdown frontmatter as the lightweight structure layer.

## Core fields

```yaml
---
title: Structure-aware biological ML
kind: synthesis-note
updated: 2026-06-07
topics:
  - biological-ml
entities:
  - BIRDNet
entity_metadata:
  - name: BIRDNet
    entity_type: Method
sources:
  - https://arxiv.org/abs/2605.28739
relations:
  - from: BIRDNet
    type: exemplifies
    to: structure-aware biological ML
---
```

## Recommended entity types

- `Method`
- `Benchmark`
- `ResearchTheme`
- `ProjectIdea`
- `Task`
- `Venue`
- `FailureMode`
- `SystemDesign`
