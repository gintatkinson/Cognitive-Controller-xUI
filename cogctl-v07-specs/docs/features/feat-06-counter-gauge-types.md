---
title: "Feature: Counter and Gauge Data Types"
epic: "Epic 2: Common YANG Data Types (ietf-yang-types)"
type: "feature"
labels: ["feature", "ietf-yang-types"]
---

# Feature: Counter and Gauge Data Types

## 1. Semantic Grouping Context
This feature logically encapsulates the counter and gauge data types from the `ietf-yang-types` module. It defines the numerical metrics used for monitoring monotonically increasing or fluctuating values.

## 2. Exhaustive Leaf Constraints

### Type: `counter32` / `zero-based-counter32`
- **Base Type:** `uint32`
- **Constraints:** Monotonically increasing until 2^32-1 (4294967295), then wraps.
- **Initial State:** No defined initial value for `counter32`. `zero-based-counter32` defaults to "0".
- **Verbatim RFC Context:**
  > The counter32 type represents a non-negative integer that monotonically increases until it reaches a maximum value of 2^32-1.

### Type: `counter64` / `zero-based-counter64`
- **Base Type:** `uint64`
- **Constraints:** Monotonically increasing until 2^64-1.
- **Initial State:** `zero-based-counter64` defaults to "0".
- **Verbatim RFC Context:**
  > The counter64 type represents a non-negative integer that monotonically increases until it reaches a maximum value of 2^64-1.

### Type: `gauge32` / `gauge64`
- **Base Type:** `uint32` / `uint64`
- **Constraints:** May increase or decrease, but shall never exceed a maximum value or fall below a minimum value (0).
- **Verbatim RFC Context:**
  > The gauge32 type represents a non-negative integer, which may increase or decrease, but shall never exceed a maximum value, nor fall below a minimum value.

## 3. Acceptance Criteria
**Given** a counter or gauge type is assigned to a schema node
**When** the node state is updated
**Then** the node MUST enforce wrap-around behaviors for counters and boundaries for gauges.
**And** zero-based variants MUST initialize to zero.

## 4. Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
