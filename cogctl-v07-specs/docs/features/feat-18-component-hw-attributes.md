---
title: "Feature: Component Hardware Attributes"
epic: "Epic 4: Base Network Inventory (ietf-network-inventory)"
type: "feature"
labels: ["feature", "ietf-network-inventory"]
---

# Feature: Component Hardware Attributes

## 1. Semantic Grouping Context
This feature logically encapsulates the granular physical and logical identification metrics belonging to modular `components` attached to a root Network Element.

## 2. Exhaustive Leaf Constraints

### Grouping: `component-attributes`
- **component-id**: `string`
- **class**: `union` (`identityref`)
  - `ianahw:hardware-class` OR `nwi:non-hardware-component-class`
- **Extends**: `ne-component-common-entity-attributes`
- **hardware-rev**: `string`
- **mfg-date**: `yang:date-and-time` (Manufacturing date)
- **part-number**: `string`
- **serial-number**: `string` (Unique within the scope of the part-number/mfg-name)
- **asset-id**: `string` (Operator assigned asset tracking ID)
- **is-fru**: `boolean` (Indicates if the component is Field-Replaceable)
- **uri**: `leaf-list inet:uri`

## 3. Acceptance Criteria
**Given** an instantiated internal chassis or line card
**When** the component is synchronized
**Then** the node MUST evaluate the `class` field against strict predefined identity union sets.
**And** the `is-fru` boundary MUST correctly delineate permanently attached vs. replaceable systems.

## 4. Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
