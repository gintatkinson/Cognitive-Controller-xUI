---
title: "Feature: Network Node Inventory"
epic: "Epic 7: Base Network Topology (ietf-network)"
type: "feature"
labels: ["feature", "ietf-network"]
---

# Feature: Network Node Inventory

## 1. Semantic Grouping Context
This feature mathematically maps the inventory of abstract, virtual, or physical nodes assigned specifically to the parent topological network.

## 2. Exhaustive Leaf Constraints

### Grouping: `node`
- **list node**: `key "node-id"`
  - **node-id**: `typedef node-id` -> `inet:uri`
  - **Uses**: `supporting-node`

## 3. Acceptance Criteria
**Given** a parent network defined within the `networks` list
**When** a topological element is appended to the network
**Then** the node MUST be instantiated inside the `node` list.
**And** its primary key `node-id` MUST validate as a fully compliant `inet:uri`.

## 4. Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
