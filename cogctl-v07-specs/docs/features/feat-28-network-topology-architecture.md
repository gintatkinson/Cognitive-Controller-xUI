---
title: "Feature: Network Topology Architecture"
epic: "Epic 7: Base Network Topology (ietf-network)"
type: "feature"
labels: ["feature", "ietf-network"]
---

# Feature: Network Topology Architecture

## 1. Semantic Grouping Context
This feature logically encapsulates the top-level boundary for the abstract base network. It establishes the foundational list of network definitions which can be recursively layered to form complex service overlays and physical underlays.

## 2. Exhaustive Leaf Constraints

### Top-Level Container: `networks`
- **list network**: `key "network-id"`
  - **network-id**: `typedef network-id` -> `inet:uri`
  - **Uses**: Sub-groupings (network-types, supporting-network, node)

## 3. Acceptance Criteria
**Given** an instantiated network or service topology
**When** the root of the datastore is queried
**Then** the top-level container MUST be exposed as `networks`.
**And** any network defined within the `network` list MUST be uniquely identified by a `network-id` conforming strictly to the `inet:uri` typing constraint.

## 4. Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
