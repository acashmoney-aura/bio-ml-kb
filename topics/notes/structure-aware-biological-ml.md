---
title: Structure-aware biological ML
kind: synthesis-note
updated: 2026-06-07
topics:
  - biological-ml
  - interpretability
  - spatial-omics
  - protein-design
  - disease-modeling
entities:
  - BIRDNet
  - GEARS
  - SILO
  - AIMS-Fold
  - ViroBench
  - JEPA-DNA
  - SC-TauPath
  - null-model bias
  - predictive lipidomics acquisition
  - structure-aware biological ML
entity_metadata:
  - name: BIRDNet
    entity_type: Method
  - name: GEARS
    entity_type: Method
  - name: SILO
    entity_type: Method
  - name: AIMS-Fold
    entity_type: Method
  - name: ViroBench
    entity_type: Benchmark
  - name: JEPA-DNA
    entity_type: Method
  - name: SC-TauPath
    entity_type: Method
  - name: null-model bias
    entity_type: FailureMode
  - name: predictive lipidomics acquisition
    entity_type: Task
  - name: structure-aware biological ML
    entity_type: ResearchTheme
sources:
  - https://arxiv.org/abs/2605.28739
  - https://arxiv.org/abs/2605.28200
  - https://arxiv.org/abs/2605.26690
  - https://arxiv.org/abs/2605.26192
  - https://arxiv.org/abs/2605.25388
  - https://arxiv.org/abs/2602.17162
  - https://arxiv.org/abs/2606.05196
  - https://arxiv.org/abs/2606.05225
  - https://arxiv.org/abs/2606.04066
relations:
  - from: BIRDNet
    type: exemplifies
    to: structure-aware biological ML
  - from: GEARS
    type: exemplifies
    to: structure-aware biological ML
  - from: JEPA-DNA
    type: exemplifies
    to: structure-aware biological ML
  - from: AIMS-Fold
    type: constrains_with
    to: experimental data
  - from: ViroBench
    type: benchmarks
    to: genomics foundation models
  - from: null-model bias
    type: can_distort
    to: biological conclusions
  - from: predictive lipidomics acquisition
    type: models
    to: experimental process
---

# Structure-aware biological ML

## Thesis

A lot of current comp-bio progress is coming from one repeated move: forcing the model to respect a meaningful scientific structure instead of treating biology as just another sequence or table dataset.

## The recurring patterns

### Symbolic or rule-like structure
BIRDNet is a clean example: the model architecture itself is shaped by interpretable implication structure rather than explanations being pasted on afterward.

### Geometry and tissue organization
GEARS is interesting because it treats spatial reconstruction as geometry recovery, which feels like a better object than naive spot deconvolution.

### Budget-aware search in biology
SILO is a reminder that in protein design, the bottleneck is often how intelligently you spend expensive oracle evaluations.

### Experiment-constrained generation
AIMS-Fold is a very believable hybrid direction: use generative priors, but steer them with real structural proteomics signals.

### Better evaluation culture
ViroBench matters because nucleotide model fluency is not the same as biological validity or robustness under shift.

## Practical takeaway

The strongest projects in this space may come less from scaling models and more from choosing the right scientific structure to encode.
