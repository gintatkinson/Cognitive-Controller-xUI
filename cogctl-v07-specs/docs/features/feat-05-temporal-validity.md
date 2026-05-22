---
title: "Feature: Temporal Validity"
epic: "Epic 1: Geographic Location (ietf-geo-location)"
type: "feature"
labels: ["feature", "ietf-geo-location"]
---

# Feature: Temporal Validity

## 1. Semantic Grouping Context
This feature logically encapsulates the temporal timestamp parameters from the `geo-location` module. It defines the point in time when the location was captured and the duration of its validity.

## 2. Exhaustive Leaf Constraints

### Leaf: `timestamp`
- **Type:** `ietf-yang-types:date-and-time`
- **Verbatim RFC Context:**
  > Reference time when location was recorded.

### Leaf: `valid-until`
- **Type:** `ietf-yang-types:date-and-time`
- **Verbatim RFC Context:**
  > The timestamp for which this geo-location is valid until. If unspecified, the geo-location has no specific expiration time.

## 3. Acceptance Criteria
**Given** a geographic location is recorded
**When** populating the temporal metrics
**Then** the node MUST accept `timestamp` and `valid-until` leaves.
**And** both MUST be strictly evaluated as `ietf-yang-types:date-and-time` formatted strings.

## 4. Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
