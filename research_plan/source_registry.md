---
title: Source Registry
kind: registry
updated: 2026-06-07
topics:
  - sources
  - computational-biology
  - genomics
entities:
  - VCWorld
  - AnnotateMissense
  - MLGenX
  - BIRDNet
  - GEARS
  - SILO
  - AIMS-Fold
  - ViroBench
  - JEPA-DNA
  - SC-TauPath
entity_metadata:
  - name: VCWorld
    entity_type: Method
  - name: AnnotateMissense
    entity_type: Method
  - name: MLGenX
    entity_type: Venue
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
relations:
  - from: Source Registry
    type: tracks
    to: VCWorld
  - from: Source Registry
    type: tracks
    to: BIRDNet
  - from: Source Registry
    type: tracks
    to: ViroBench
---

# Source Registry

Updated: 2026-06-07

| Bucket | Source | Type | Why it matters |
|---|---|---|---|
| Virtual cells | https://arxiv.org/abs/2512.00306 | paper | mechanistic virtual-cell direction |
| Virtual cells | https://www.nature.com/articles/s41746-025-02198-6 | review | field map and validation bottlenecks |
| Genomics | https://www.biorxiv.org/content/10.64898/2026.05.03.722489v1.full.pdf | paper | missense variant prediction framing |
| Bio-ML systems | https://arxiv.org/abs/2605.28739 | paper | interpretable symbolic priors in omics ML |
| Spatial omics | https://arxiv.org/abs/2605.28200 | paper | geometry-first spatial reconstruction |
| Protein design | https://arxiv.org/abs/2605.26690 | paper | budget-aware biological search |
| Protein design eval | https://arxiv.org/abs/2606.02624 | benchmark | chronological replay benchmark for future-round discovery |
| Agentic protein design | https://arxiv.org/abs/2606.02386 | paper | tool-using protein design workflow |
| Molecular optimization | https://arxiv.org/abs/2606.00555 | paper | probing-guided structure-based optimization |
| Protein structure | https://arxiv.org/abs/2605.26192 | paper | experiment-guided folding |
| Viral genomics | https://arxiv.org/abs/2605.25388 | benchmark | reality check for nucleotide FMs |
| Genome FMs | https://arxiv.org/abs/2602.17162 | paper | predictive latent semantics for DNA |
| Genome FM eval | https://arxiv.org/abs/2606.04525 | benchmark | honest comparison across genomic model families |
| Genome FM tokenization | https://arxiv.org/abs/2606.04552 | paper | learnable tokenization for genomics |
| Structural decision support | https://arxiv.org/abs/2606.04020 | paper | isoform-aware druggability and failure boundaries |
| Structural decision support | https://arxiv.org/abs/2606.04021 | paper | pre-synthesis degradability triage |
| Interface modeling | https://arxiv.org/abs/2606.04154 | paper | interaction-first epitope prediction |
| Structure infrastructure | https://arxiv.org/abs/2606.04566 | paper | throughput acceleration for AF-based PPI screening |
| Disease modeling | https://arxiv.org/abs/2606.04066 | paper | interpretable tau pathway attribution |
| RNA methylation foundation model | http://arxiv.org/abs/2606.12219 | paper | weak-to-strong supervision pattern for m6A prediction at scale |
| Interpretable protein-function features | http://arxiv.org/abs/2606.12209 | paper | sparse autoencoder features for legible enzyme-function prediction |
| Serial ctDNA change detection | http://arxiv.org/abs/2606.11876 | paper | explicit censored-observation modeling for low-signal longitudinal detection |
| Multi-task ADME pretraining | http://arxiv.org/abs/2606.11508 | paper | probabilistic objective design for transfer across ADME tasks |
| Peptide sequencing inference repair | http://arxiv.org/abs/2606.11868 | paper | training-free spectral memory for balancing decoder priors with evidence |
| Virtual-cell perturbation modeling | https://arxiv.org/abs/2606.12838 | paper | scalable transformer denoising approach to perturbation-response prediction |
| Structure-guided nanobody design | https://arxiv.org/abs/2606.12772 | paper | differentiable distogram optimization for epitope-targeted design |
| Genomic priors for personalization | https://arxiv.org/abs/2606.13556 | framework paper | evidence-graded Bayesian genomic priors for physiological interpretation |
| Likelihood-aware mechanistic learning | https://arxiv.org/abs/2606.13475 | paper | jointly learning biological dynamics and heteroscedastic noise |
| Protein language model geometry | https://arxiv.org/abs/2606.12609 | paper | probing what representation geometry captures in protein language models |
| Bioinformatics software ecosystem | https://www.bioconductor.org/ | project site | core R-based open-source ecosystem for reproducible computational biology workflows |
| Bioconductor mission and package model | https://new.bioconductor.org/about/ | project overview | explains the reproducibility, package, release, annotation, and training model behind Bioconductor |
| Bioconductor platform paper | http://www.nature.com/nmeth/journal/v12/n2/abs/nmeth.3252.html | paper | canonical overview of Bioconductor as an analysis and software platform |
| Deep regulatory sequence modeling | https://www.nature.com/articles/s41588-022-01048-5 | paper | enhancer activity prediction and synthetic enhancer design from DNA sequence |
| DeepSTARR codebase | https://github.com/bernardo-de-almeida/DeepSTARR | code | practical implementation details, assay context, architecture, and inference workflow |
