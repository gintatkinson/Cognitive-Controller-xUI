---
title: "Feature: Velocity Vector"
epic: "Epic 1: Geographic Location (ietf-geo-location)"
type: "feature"
labels: ["feature", "ietf-geo-location"]
---

# Feature: Velocity Vector

## 1. Semantic Grouping Context
This feature logically encapsulates the `velocity` container from the `geo-location` module. It defines the trajectory and speed of the node across three directional vectors.

## 2. Exhaustive Leaf Constraints

### Leaf: `v-north`
- **Type:** `decimal64` (fraction-digits: 12)
- **Units:** `meters per second`
- **Verbatim RFC Context:**
  > v-north is the rate of change (i.e., speed) towards true north as defined by the geodetic-system.

### Leaf: `v-east`
- **Type:** `decimal64` (fraction-digits: 12)
- **Units:** `meters per second`
- **Verbatim RFC Context:**
  > v-east is the rate of change (i.e., speed) perpendicular to the right of true north as defined by the geodetic-system.

### Leaf: `v-up`
- **Type:** `decimal64` (fraction-digits: 12)
- **Units:** `meters per second`
- **Verbatim RFC Context:**
  > v-up is the rate of change (i.e., speed) further from the center of the reference frame.

## 3. Acceptance Criteria
**Given** a moving object generating location metrics
**When** the velocity container is populated
**Then** the node MUST accept `v-north`, `v-east`, and `v-up` leaves of type decimal64.
**And** the decimals MUST support exactly 12 fraction digits.
**And** the unit measurements for all three vectors MUST be evaluated as meters per second.

## 4. Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
