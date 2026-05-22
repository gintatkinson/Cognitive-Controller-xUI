---
title: "Feature: Underlay Network and Node Support"
epic: "Epic 7: Base Network Topology (ietf-network)"
type: "feature"
labels: ["feature", "ietf-network"]
---

# Feature: Underlay Network and Node Support

## 1. Semantic Grouping Context
This feature logically encapsulates the cross-layer structural mappings. It provides the mechanism for virtual overlay networks to formally bind to physical underlay networks, enabling recursive multi-layer topologies.

## 2. Exhaustive Leaf Constraints

### Grouping: `supporting-network`
- **list supporting-network**: `key "network-ref"`
  - **network-ref**: `leafref` -> `path "/nw:networks/nw:network/nw:network-id"` (require-instance false)

### Grouping: `supporting-node`
- **list supporting-node**: `key "network-ref node-ref"`
  - **network-ref**: `leafref` -> `path "../../../nw:supporting-network/nw:network-ref"` (require-instance false)
  - **node-ref**: `leafref` -> `path "/nw:networks/nw:network/nw:node/nw:node-id"` (require-instance false)

## 3. Acceptance Criteria
**Given** a multi-layer logical topology
**When** the overlay network is evaluated
**Then** any referenced `supporting-network` MUST target a valid `network-id` elsewhere in the schema.
**And** any `supporting-node` mapping MUST enforce a dual-key relationship mapping both the target `network-ref` and the specific underlay `node-ref`.

## 4. Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
