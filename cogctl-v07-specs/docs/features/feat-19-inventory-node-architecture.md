---
title: "Feature: Inventory Node Architecture"
epic: "Epic 4: Base Network Inventory (ietf-network-inventory)"
type: "feature"
labels: ["feature", "ietf-network-inventory"]
---

# Feature: Inventory Node Architecture

## 1. Semantic Grouping Context
This feature logically encapsulates the top-level operational tree `network-elements` defining network nodes and recursively managing their sub-components in a relational, non-circular tree.

## 2. Exhaustive Leaf Constraints

### Container: `network-inventory/network-elements/network-element`
- **Constraint**: `config false`
- **Key**: `ne-id` (`string`)
- **ne-type**: `identityref` (Default: `nwi:ne-physical`)
- **product-rev**: `string`

### List: `components/component`
- **Key**: `component-id`
- **Uses**: `component-attributes`
- **parent**: `leaf-list leafref`
  - **Path**: `"../../component/component-id"`
- **parent-rel-pos**: `string`
  - **When**: `count(../parent) < 2`
  - **Constraint**: Encodes relative placement (e.g. integer string mapped from RFC 6933).
- **is-main**: `boolean`
  - **When**: `derived-from-or-self(../nwi:class, 'ianahw:chassis')`

## 3. Acceptance Criteria
**Given** an initialized inventory database
**When** Network Elements are synchronized
**Then** the node MUST enforce that a component specifies `parent-rel-pos` only if it belongs to exactly one (or zero) parent component.
**And** the `is-main` chassis toggle MUST be exposed exclusively on items classed explicitly as `chassis`.

## 4. Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
