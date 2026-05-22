---
title: "Feature: Node Termination Points"
epic: "epic-09-network-topology"
type: "feature"
labels: ["feature", "ietf-network-topology"]
---

# Feature: Node Termination Points

## 1. Semantic Grouping Context
This feature encapsulates the augmentation of abstract network nodes to support termination interfaces. It allows logical or physical ports to be modeled directly onto the nodes defined in the base `ietf-network` module.

## 2. Exhaustive Leaf Constraints

### Augmentation: `augment "/nw:networks/nw:network/nw:node"`
- **list termination-point**: `key "tp-id"`
  - **tp-id**: `type tp-id` (which is `inet:uri`)

## 3. Acceptance Criteria
**Given** an abstract network node
**When** defining its topological interfaces
**Then** the schema MUST augment a `termination-point` list directly onto the base `/nw:networks/nw:network/nw:node` container.
**And** each termination point MUST be uniquely identified within the node by a `tp-id` typed as an `inet:uri`.

## 4. Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
