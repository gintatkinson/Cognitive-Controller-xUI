---
title: "Feature: Network Element Core Attributes"
epic: "Epic 4: Base Network Inventory (ietf-network-inventory)"
type: "feature"
labels: ["feature", "ietf-network-inventory"]
---

# Feature: Network Element Core Attributes

## 1. Semantic Grouping Context
This feature expands upon the basic common entity attributes by defining structural data regarding manufacturer branding and active software imaging.

## 2. Exhaustive Leaf Constraints

### Grouping: `ne-component-common-entity-attributes`
- **Extends**: `basic-common-entity-attributes`
- **mfg-name**: `string` (Name of the manufacturer)
- **product-name**: `string` (Vendor-specific product descriptor mapping element type)
- **software-rev**: List (Key: `name`)
  - **name**: `string` (Vendor software module name)
  - **revision**: `string` (Version string)
  - **patch**: List (Key: `revision`) - Sub-list of installed software patches

## 3. Acceptance Criteria
**Given** an initialized Network Element
**When** system telemetry is polled
**Then** the node MUST expose its product name and manufacturer data logically grouped.
**And** it MUST encapsulate all running software modules and their subsequent patch hierarchies internally without conflating hardware IDs.

## 4. Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
