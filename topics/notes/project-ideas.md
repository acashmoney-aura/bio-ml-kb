---
title: Project ideas for bio ML and genomics
kind: synthesis-note
updated: 2026-06-07
topics:
  - project-ideas
  - biological-ml
  - genomics
  - systems-biology
entities:
  - simulated nucleus
  - structure-aware biological ML benchmark
  - virtual-cell validation map
  - experiment-aware bio agents
  - Kwan Lab-adjacent ideas
  - future-round biology evaluation harness
  - representation-boundary benchmark
entity_metadata:
  - name: simulated nucleus
    entity_type: ProjectIdea
  - name: structure-aware biological ML benchmark
    entity_type: ProjectIdea
  - name: virtual-cell validation map
    entity_type: ProjectIdea
  - name: experiment-aware bio agents
    entity_type: ProjectIdea
  - name: Kwan Lab-adjacent ideas
    entity_type: ProjectIdea
  - name: future-round biology evaluation harness
    entity_type: ProjectIdea
  - name: representation-boundary benchmark
    entity_type: ProjectIdea
relations:
  - from: simulated nucleus
    type: builds_on
    to: virtual cells
  - from: structure-aware biological ML benchmark
    type: compares
    to: structure-aware biological ML
  - from: virtual-cell validation map
    type: evaluates
    to: virtual cells
  - from: experiment-aware bio agents
    type: extends
    to: lab-in-the-loop agents
  - from: future-round biology evaluation harness
    type: builds_on
    to: TadA-Bench
  - from: representation-boundary benchmark
    type: compares
    to: genomic foundation models
---

# Project ideas for bio ML and genomics

## 1. Simulated nucleus
A sharper version of the virtual-cell idea: focus on one subproblem around regulatory state, chromatin organization, or perturbation response, and make it explicit what is being simulated and what measurement would validate it.

## 2. Structure-aware biological ML benchmark
Compare different ways of injecting scientific structure:
- symbolic priors
- geometric priors
- latent semantic objectives
- experiment-constrained generation
- better null models

The goal would be to measure where structure buys interpretability, robustness, or transfer.

## 3. Virtual-cell validation map
Build a map of what counts as validation in virtual-cell research:
- perturbation prediction
- pathway agreement
- tissue transfer
- wet-lab alignment
- causal usefulness versus descriptive fit

## 4. Experiment-aware bio agents
A serious version of "agents for biology" would not just summarize papers. It would propose hypotheses, tie them to candidate experiments, and track what evidence would falsify them.

## 5. Future-round biology evaluation harness
Build a benchmark suite for biological systems that asks whether models improve future experimental decisions instead of just random-split interpolation.

## 6. Representation-boundary benchmark
Compare where different abstraction levels help most:
- token or base-level modeling
- motif-level reasoning
- isoform-aware structure views
- interaction-level and interface-level prediction
