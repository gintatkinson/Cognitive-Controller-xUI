---
title: "Feature: Ellipsoid Location Choice"
epic: "Epic 1: Geographic Location (ietf-geo-location)"
type: "feature"
labels: ["feature", "ietf-geo-location"]
---

# Feature: Ellipsoid Location Choice

## 1. Semantic Grouping Context
This feature logically encapsulates the `ellipsoid` case from the `location` choice grouping. It defines terrestrial surface coordinates.

## 2. Exhaustive Leaf Constraints

### Leaf: `latitude`
- **Type:** `decimal64` (fraction-digits: 16)
- **Units:** `decimal degrees`
- **Verbatim RFC Context:**
  > The latitude value on the astronomical body. The definition and precision of this measurement is indicated by the reference-frame.

### Leaf: `longitude`
- **Type:** `decimal64` (fraction-digits: 16)
- **Units:** `decimal degrees`
- **Verbatim RFC Context:**
  > The longitude value on the astronomical body. The definition and precision of this measurement is indicated by the reference-frame.

### Leaf: `height`
- **Type:** `decimal64` (fraction-digits: 6)
- **Units:** `meters`
- **Verbatim RFC Context:**
  > Height from a reference 0 value. The precision and '0' value is defined by the reference-frame.

## 3. Acceptance Criteria
**Given** the location choice is evaluated as `ellipsoid`
**When** specifying the horizontal and vertical elevation coordinates
**Then** the node MUST accept `latitude` and `longitude` leaves of type decimal64 with exactly 16 fraction digits and unit measurement of decimal degrees.
**And** it MUST accept a `height` leaf of type decimal64 with exactly 6 fraction digits and unit measurement of meters.

## 4. Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
