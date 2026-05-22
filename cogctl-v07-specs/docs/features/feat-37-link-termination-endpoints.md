---
title: "Feature: Link Termination Endpoints"
epic: "epic-09-network-topology"
type: "feature"
labels: ["feature", "ietf-network-topology"]
---

# Feature: Link Termination Endpoints

## 1. Semantic Grouping Context
This feature encapsulates the mathematical mapping of a link's source and destination to specific nodes and termination points. It enforces the referential integrity of point-to-point connections within the same network.

## 2. Exhaustive Leaf Constraints

### Inside `list link`
- **container source**
  - **source-node**: `leafref` -> `../../../nw:node/nw:node-id`
  - **source-tp**: `leafref` -> `../../../nw:node[nw:node-id=current()/../source-node]/termination-point/tp-id`
- **container destination**
  - **dest-node**: `leafref` -> `../../../nw:node/nw:node-id`
  - **dest-tp**: `leafref` -> `../../../nw:node[nw:node-id=current()/../dest-node]/termination-point/tp-id`

## 3. Acceptance Criteria
**Given** an instantiated link object
**When** defining its topological endpoints
**Then** the schema MUST mandate a `source` and `destination` container.
**And** the `source-node` and `dest-node` MUST be absolute leafrefs pointing exclusively to nodes that exist within the same current network.
**And** the `source-tp` and `dest-tp` MUST be absolute leafrefs resolving strictly to the `termination-point` array residing on those specific resolved nodes.

## 4. Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
