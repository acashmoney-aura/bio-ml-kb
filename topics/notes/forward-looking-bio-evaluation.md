---
title: Forward-looking evaluation for biological ML and agents
kind: synthesis-note
updated: 2026-06-07
topics:
  - evaluation
  - protein-design
  - agents
  - wet-lab-relevance
entities:
  - TadA-Bench
  - AgentPLM
  - PROBE
  - SILO
  - future-round discovery
  - finite-budget evaluation
  - wet-lab replay benchmarks
entity_metadata:
  - name: TadA-Bench
    entity_type: Benchmark
  - name: AgentPLM
    entity_type: Method
  - name: PROBE
    entity_type: Method
  - name: SILO
    entity_type: Method
  - name: future-round discovery
    entity_type: Task
  - name: finite-budget evaluation
    entity_type: Task
  - name: wet-lab replay benchmarks
    entity_type: Benchmark
sources:
  - https://arxiv.org/abs/2606.02624
  - https://arxiv.org/abs/2606.02386
  - https://arxiv.org/abs/2606.00555
  - https://arxiv.org/abs/2605.26690
relations:
  - from: TadA-Bench
    type: evaluates
    to: future-round discovery
  - from: TadA-Bench
    type: exemplifies
    to: wet-lab replay benchmarks
  - from: AgentPLM
    type: supports
    to: finite-budget evaluation
  - from: PROBE
    type: improves
    to: finite-budget evaluation
  - from: SILO
    type: improves
    to: finite-budget evaluation
---

# Forward-looking evaluation for biological ML and agents

## Core thesis

A lot of biological ML still gets overpraised for interpolation on static datasets. The more honest question is whether a model helps with the next experimental decision under time, chronology, and budget constraints.

## Why this note exists

This repo should not confuse:
- fitting a benchmark split
- with helping future wet-lab discovery

That distinction matters a lot in protein engineering and agentic biological systems.

## The main examples

### TadA-Bench
This is one of the most useful benchmark ideas in the whole space because it preserves the chronology of a real directed-evolution campaign. It asks whether a system trained on earlier rounds can actually rank variants from later rounds.

### SILO
SILO reinforces the point that biological optimization often depends more on how you spend expensive evaluations than on having the fanciest generator.

### AgentPLM and PROBE
These systems are interesting because they behave more like tool-using scientific workflows. But that only matters if evaluation reflects real decision pressure rather than static iid splits.

## Practical takeaway

For this knowledge base, any future biological-agent or protein-design note should be tagged not just by task, but by evaluation honesty:
- random split
- temporal split
- future-round replay
- finite-budget discovery
