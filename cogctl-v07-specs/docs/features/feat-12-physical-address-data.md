---
title: "Feature: Physical Address Data"
epic: "Epic 3: Network Inventory Location (ietf-ni-location)"
type: "feature"
labels: ["feature", "ietf-ni-location"]
---

# Feature: Physical Address Data

## 1. Semantic Grouping Context
This feature logically encapsulates the `physical-address` grouping, which maps the tangible geographic structures (street, city, state, postal code, country) into network elements.

## 2. Exhaustive Leaf Constraints

### Grouping: `physical-address`
- **address**: `string` (Number and street)
- **postal-code**: `string`
- **state**: `string` (Can also map to region for non-state countries)
- **city**: `string`
- **country-code**: `string`
  - **Pattern**: `'[A-Z]{2}'`
  - **Constraint**: Must match ISO ALPHA-2 code bounds precisely.

## 3. Acceptance Criteria
**Given** a network location instance is defined
**When** the physical address properties are provided
**Then** the node MUST enforce that the `country-code` exactly matches 2 uppercase alphabetical characters.
**And** it MUST successfully associate the free-form properties (state, city, address) without strict bounds.

## 4. Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
