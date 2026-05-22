---
title: "Feature: Hardware Rack Structuring"
epic: "Epic 3: Network Inventory Location (ietf-ni-location)"
type: "feature"
labels: ["feature", "ietf-ni-location"]
---

# Feature: Hardware Rack Structuring

## 1. Semantic Grouping Context
This feature logically encapsulates the `racks` grouping, mapping exact multidimensional properties (wattage, voltage, dimension, matrix-positioning) to data center infrastructure constraints.

## 2. Exhaustive Leaf Constraints

### Grouping: `racks`
- **Constraint**: `config false` (Strictly operational state, read-only).

### List: `rack`
- **Key**: `id` (`string`)
- **rack-class**: `identityref` (rack-class-type)
- **rack-location**:
  - `location-ref`: `leafref` to `ni-location-ref` (binding back to `locations/location/id`)
  - `row-number` / `column-number`: `uint32`
- **height / width / depth**:
  - **Type**: `uint16`
  - **Unit**: `millimeter`
- **max-voltage**:
  - **Type**: `uint16`
  - **Unit**: `volt`
- **max-allocated-power**:
  - **Type**: `uint16`
  - **Unit**: `watts`
- **contained-chassis**: List
  - **Key**: `relative-position` (`uint8`, U-slot mapping)
  - **ne-ref**: `leafref` to `/nwi:network-inventory/nwi:network-elements/nwi:network-element/nwi:ne-id`

## 3. Acceptance Criteria
**Given** an instantiated rack node
**When** the physical boundaries are defined
**Then** the node MUST enforce that voltage, power, and dimension values are strictly mapped to `uint16` with the correct scaling units (`millimeter`, `volt`, `watts`).
**And** chassis positioning MUST use `uint8` for U-slot resolution.

## 4. Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
