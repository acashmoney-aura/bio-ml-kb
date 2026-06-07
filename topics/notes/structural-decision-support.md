---
title: Structural decision support in biology
kind: synthesis-note
updated: 2026-06-07
topics:
  - structure-biology
  - druggability
  - degradability
  - interfaces
  - disease-modeling
entities:
  - SpliceBind
  - DegradoMap
  - EpiFormer
  - AF_Cache
  - SC-TauPath
  - isoform-aware druggability
  - PROTAC degradability
  - epitope prediction
  - pathway attribution
  - workflow throughput
entity_metadata:
  - name: SpliceBind
    entity_type: Method
  - name: DegradoMap
    entity_type: Method
  - name: EpiFormer
    entity_type: Method
  - name: AF_Cache
    entity_type: Method
  - name: SC-TauPath
    entity_type: Method
  - name: isoform-aware druggability
    entity_type: Task
  - name: PROTAC degradability
    entity_type: Task
  - name: epitope prediction
    entity_type: Task
  - name: pathway attribution
    entity_type: Task
  - name: workflow throughput
    entity_type: ResearchTheme
sources:
  - https://arxiv.org/abs/2606.04020
  - https://arxiv.org/abs/2606.04021
  - https://arxiv.org/abs/2606.04154
  - https://arxiv.org/abs/2606.04566
  - https://arxiv.org/abs/2606.04066
relations:
  - from: SpliceBind
    type: targets
    to: isoform-aware druggability
  - from: DegradoMap
    type: targets
    to: PROTAC degradability
  - from: EpiFormer
    type: targets
    to: epitope prediction
  - from: SC-TauPath
    type: targets
    to: pathway attribution
  - from: AF_Cache
    type: improves
    to: workflow throughput
---

# Structural decision support in biology

## Core thesis

Some of the most believable bio-ML work is not trying to solve biology in one shot. It is trying to improve a concrete structural or translational decision boundary.

## What makes this category useful

These methods are strongest when they do one of two things well:
- improve an early triage decision
- clarify where the model's own abstraction will fail

## Examples

### SpliceBind
This is especially good because it does more than output a score. It helps separate druggability cases where structural reasoning is relevant from those where the resistance mechanism is structurally invisible.

### DegradoMap
This hits a realistic bottleneck: deciding whether a target-E3 pairing is promising before expensive chemistry has even happened.

### EpiFormer
A good reminder that if the biology is interaction-first, the architecture probably should be too.

### AF_Cache
Infrastructure matters. If structure-based screening is too slow, a lot of otherwise-good scientific ideas never become usable workflows.

### SC-TauPath
Interpretability matters most when it becomes anatomically or mechanistically legible, not just cosmetically explainable.

## Practical takeaway

This repo should keep a separate thread for methods that are useful specifically because they sharpen decision support rather than only raising benchmark scores.
