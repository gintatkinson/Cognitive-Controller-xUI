---
title: "Feature: Underlay Topological Support Mapping"
epic: "epic-09-network-topology"
type: "feature"
labels: ["feature", "ietf-network-topology"]
---

# Feature: Underlay Topological Support Mapping

## 1. Semantic Grouping Context
This feature defines the highly complex, multi-key referential arrays that allow links and termination points to recursively map downwards to their physical or logical underlay dependencies.

## 2. Exhaustive Leaf Constraints

### Inside `list link`
- **list supporting-link**: `key "network-ref link-ref"`
  - **network-ref**: `leafref` -> `../../../nw:supporting-network/nw:network-ref`
  - **link-ref**: `leafref` -> `/nw:networks/nw:network[nw:network-id=current()/../network-ref]/link/link-id`

### Inside `list termination-point`
- **list supporting-termination-point**: `key "network-ref node-ref tp-ref"`
  - **network-ref**: `leafref` -> `../../../nw:supporting-node/nw:network-ref`
  - **node-ref**: `leafref` -> `../../../nw:supporting-node/nw:node-ref`
  - **tp-ref**: `leafref` -> `/nw:networks/nw:network[nw:network-id=current()/../network-ref]/nw:node[nw:node-id=current()/../node-ref]/termination-point/tp-id`

## 3. Acceptance Criteria
**Given** an abstract overlay link or termination point
**When** mapping its dependencies to an underlay topology
**Then** `supporting-link` MUST validate a dual-key system ensuring the target link resides within the explicitly declared `supporting-network` array of the parent network.
**And** `supporting-termination-point` MUST validate a triple-key system ensuring the target termination point resides within the explicitly declared `supporting-node` array of the parent node.

## 4. Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
