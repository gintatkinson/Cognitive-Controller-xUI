---
title: "Feature: Basic Common Entity Attributes"
epic: "Epic 4: Base Network Inventory (ietf-network-inventory)"
type: "feature"
labels: ["feature", "ietf-network-inventory"]
---

# Feature: Basic Common Entity Attributes

## 1. Semantic Grouping Context
This feature logically encapsulates the lowest-level identifier properties shared universally across all inventory modules, providing textual aliases and universally unique bounds for entities.

## 2. Exhaustive Leaf Constraints

### Grouping: `basic-common-entity-attributes`
- **uuid**: `yang:uuid` (Universally Unique Identifier of the entity)
- **name**: `string` (Non-volatile handle, assigned by operator or discovered uniquely)
- **alias**: `string` (Optional operator-assigned textual alias)
- **description**: `string` (Textual description)

## 3. Acceptance Criteria
**Given** any base-level network inventory element or component
**When** identity descriptors are loaded
**Then** the node MUST enforce RFC 9562 UUID canonical formatting for the `uuid`.
**And** the `name` MUST serve as a uniquely identifiable, non-volatile string handle in the operational state.

## 4. Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
