---
title: "Feature: Topology Network Typing"
epic: "Epic 5: Network Inventory Topology (ietf-network-inventory-topology)"
type: "feature"
labels: ["feature", "ietf-network-inventory-topology"]
---

# Feature: Topology Network Typing

## 1. Semantic Grouping Context
This feature logically encapsulates the root presence container that flags a network layer as an inventory topology network capable of receiving physical augmentations.

## 2. Exhaustive Leaf Constraints

### Augmentation: `/nw:networks/nw:network/nw:network-types`
- **inventory-topology**: `container` (presence)
  - **Constraint**: Indicates the bottom-most physical topology instance containing physical-layer attributes.

## 3. Acceptance Criteria
**Given** an RFC 8345 defined network topology
**When** the topology is designated as physical infrastructure
**Then** the node MUST inject the `inventory-topology` presence container to enable the underlay routing validations.

## 4. Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
