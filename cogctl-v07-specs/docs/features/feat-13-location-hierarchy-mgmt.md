---
title: "Feature: Location Hierarchy Management"
epic: "Epic 3: Network Inventory Location (ietf-ni-location)"
type: "feature"
labels: ["feature", "ietf-ni-location"]
---

# Feature: Location Hierarchy Management

## 1. Semantic Grouping Context
This feature logically encapsulates the central `locations` and `location` boundaries, representing logical or physical placements (e.g., room, floor, building) within the network inventory.

## 2. Exhaustive Leaf Constraints

### Grouping: `locations`
- **Constraint**: `config false` (Strictly operational state, read-only).

### List: `location`
- **Key**: `id` (`string`)
- **type**: `string` (Flexibility for custom organizational naming conventions e.g. "pole", "roof").
- **parent**: `leafref`
  - **Path**: `"../../location/id"`
  - **Constraint**: Strict hierarchical mapping to a superior location instance.
- **timestamp / valid-until**: `date-and-time` (RFC 9911 imported limits).
- **contained-chassis**: List of chassis instances bypassing rack containment.
  - **Key**: `chassis-id`
  - **ne-ref**: `leafref` to `/nwi:network-inventory/nwi:network-elements/nwi:network-element/nwi:ne-id`

## 3. Acceptance Criteria
**Given** a network element configuration
**When** the locations tree is populated
**Then** the node MUST enforce read-only visibility for external systems.
**And** any `parent` references MUST resolve explicitly to another valid location ID within the list.

## 4. Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
