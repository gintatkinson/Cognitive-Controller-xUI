---
title: "Feature: Passive Cable Architecture"
epic: "Epic 6: Passive Network Inventory (ietf-nwi-passive-inventory)"
type: "feature"
labels: ["feature", "ietf-nwi-passive-inventory"]
---

# Feature: Passive Cable Architecture

## 1. Semantic Grouping Context
This feature logically encapsulates the unmanaged, physical cable components (both electrical and optical) that form the physical transmission layer between topological endpoints.

## 2. Exhaustive Leaf Constraints

### Grouping: `cables`
- **list cable**: `key "id"`
  - **Uses**: `cable-attributes`, `child-cables`

### Grouping: `cable-attributes`
- **Uses**: `common-cable-attributes`, `nwi:basic-common-entity-attributes`
- **cable-type**: `identityref` (Base `cable-type`)
- **cable-role**: `identityref` (Base `cable-role`: backbone, aggregation, access, trunk, distribution, branch)
- **Uses**: `optical-cable-attributes`

### Grouping: `child-cables`
- **list child-cable**: `key "index"`, `min-elements 2`
  - **index**: `uint8`
  - **Uses**: `common-cable-attributes`

### Grouping: `common-cable-attributes`
- **id**: `string`
- **length**: `uint32` (units: meter)
- **Uses**: `connected-device-ref`

## 3. Acceptance Criteria
**Given** an instantiated passive inventory hierarchy
**When** a physical cable run is queried
**Then** the node MUST expose the `cable-role` and `cable-type` correctly utilizing identity constraints.
**And** any composite/spliced cable runs MUST be represented accurately in the `child-cable` list containing a minimum of 2 concatenated segments.

## 4. Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
