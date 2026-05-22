---
title: "Feature: Passive Port Interfaces"
epic: "Epic 6: Passive Network Inventory (ietf-nwi-passive-inventory)"
type: "feature"
labels: ["feature", "ietf-nwi-passive-inventory"]
---

# Feature: Passive Port Interfaces

## 1. Semantic Grouping Context
This feature logically maps the localized physical interface ports situated on passive devices (e.g. the specific patching inputs on an ODF) and their core attributes.

## 2. Exhaustive Leaf Constraints

### Grouping: `passive-device-ports`
- **list passive-port**: `key "id"`
  - **id**: `string`
  - **Uses**: `nwi:basic-common-entity-attributes`
  - **port-type**: `identityref` (Base `passive-port-type`: service-port, input-port, output-port, p2mp-port)
  - **fiber-core-num**: `uint32`

## 3. Acceptance Criteria
**Given** a passive device with multiple physical interfaces
**When** the topology maps its port structures
**Then** the node MUST uniquely identify each interface in the `passive-port` list using its `id`.
**And** it MUST classify the routing directionality of the port via the `port-type` identityref constraints.

## 4. Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
