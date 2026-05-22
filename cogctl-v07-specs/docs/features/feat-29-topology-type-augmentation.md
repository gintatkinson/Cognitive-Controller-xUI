---
title: "Feature: Topology Type Augmentation"
epic: "Epic 7: Base Network Topology (ietf-network)"
type: "feature"
labels: ["feature", "ietf-network"]
---

# Feature: Topology Type Augmentation

## 1. Semantic Grouping Context
This feature logically groups the extensibility point defined within the network module. It acts as an empty container designed specifically to be targeted by downstream technology-specific modules (such as OSPF, ISIS, or Inventory Topologies) using presence flags.

## 2. Exhaustive Leaf Constraints

### Container: `network-types`
- Defined as an empty container serving purely as an augmentation target.
- "The network type is indicated through corresponding presence containers augmented into this container."

## 3. Acceptance Criteria
**Given** a downstream technology-specific module
**When** the module extends the `ietf-network` base
**Then** it MUST augment into the `network-types` container.
**And** the augmentation MUST utilize an empty `presence` container flag to cleanly announce the topological domain.

## 4. Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
