---
title: "Feature: Cartesian Location Choice"
epic: "Epic 1: Geographic Location (ietf-geo-location)"
type: "feature"
labels: ["feature", "ietf-geo-location"]
---

# Feature: Cartesian Location Choice

## 1. Semantic Grouping Context
This feature logically encapsulates the `cartesian` case from the `location` choice grouping. It defines absolute spatial volume coordinates relative to the center of the reference body.

## 2. Exhaustive Leaf Constraints

### Leaf: `x`
- **Type:** `decimal64` (fraction-digits: 6)
- **Units:** `meters`
- **Verbatim RFC Context:**
  > The X value as defined by the reference-frame.

### Leaf: `y`
- **Type:** `decimal64` (fraction-digits: 6)
- **Units:** `meters`
- **Verbatim RFC Context:**
  > The Y value as defined by the reference-frame.

### Leaf: `z`
- **Type:** `decimal64` (fraction-digits: 6)
- **Units:** `meters`
- **Verbatim RFC Context:**
  > The Z value as defined by the reference-frame.

## 3. Acceptance Criteria
**Given** the location choice is evaluated as `cartesian`
**When** specifying the spatial coordinates
**Then** the node MUST accept `x`, `y`, and `z` leaves of type decimal64.
**And** the decimals MUST support exactly 6 fraction digits.
**And** the unit measurements for all three axes MUST be evaluated as meters.

## 4. Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
