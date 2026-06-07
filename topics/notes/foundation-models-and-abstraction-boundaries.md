---
title: Foundation models and abstraction boundaries in biology
kind: synthesis-note
updated: 2026-06-07
topics:
  - genomics
  - foundation-models
  - evaluation
  - tokenization
entities:
  - Evo 2
  - GENEB
  - LDARNet
  - genomic foundation models
  - abstraction boundary
  - adaptive tokenization
  - representation benchmarking
entity_metadata:
  - name: Evo 2
    entity_type: Method
  - name: GENEB
    entity_type: Benchmark
  - name: LDARNet
    entity_type: Method
  - name: genomic foundation models
    entity_type: ResearchTheme
  - name: abstraction boundary
    entity_type: ResearchTheme
  - name: adaptive tokenization
    entity_type: Method
  - name: representation benchmarking
    entity_type: Task
sources:
  - https://www.nature.com/articles/s41586-026-10176-5
  - https://arxiv.org/abs/2606.04525
  - https://arxiv.org/abs/2606.04552
relations:
  - from: Evo 2
    type: exemplifies
    to: genomic foundation models
  - from: GENEB
    type: benchmarks
    to: genomic foundation models
  - from: LDARNet
    type: uses
    to: adaptive tokenization
  - from: representation benchmarking
    type: clarifies
    to: abstraction boundary
---

# Foundation models and abstraction boundaries in biology

## Core thesis

Big biological foundation models are interesting, but the real question is what abstraction level they make scientifically useful. Scale matters less if the model cannot support the right downstream reasoning task.

## Key pieces

### Evo 2
Evo 2 is the scale story: broad biological coverage, very long context, and the promise of a general substrate for genome-scale reasoning. The important question is not just whether it is large, but whether it helps with concrete tasks like variant interpretation or regulatory modeling.

### GENEB
GENEB is valuable because it pushes back on sloppy leaderboard culture. If model rankings flip depending on task family, then a single "best genomic model" headline is mostly fake precision.

### LDARNet
LDARNet is a good reminder that tokenization is not a neutral preprocessing choice. In genomics, fixed sequence chunks are convenient for models but not necessarily biologically faithful.

## Why this matters

This cluster is useful because it frames a sharper comp-bio question: when should the unit of reasoning be a base, motif, token, region, isoform, or larger genomic context? That is exactly the kind of systems-level modeling question worth tracking.
