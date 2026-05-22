---
title: "Feature: Date, Time, and Temporal Data Types"
epic: "Epic 2: Common YANG Data Types (ietf-yang-types)"
type: "feature"
labels: ["feature", "ietf-yang-types"]
---

# Feature: Date, Time, and Temporal Data Types

## 1. Semantic Grouping Context
This feature logically encapsulates the time and duration types. It provides the strict constraints for Gregorian calendar, time zones, and fractional intervals (milliseconds up to timeticks).

## 2. Exhaustive Leaf Constraints

### Type: `date-and-time`
- **Base Type:** `string`
- **Pattern:** `'[0-9]{4}-(1[0-2]|0[1-9])-(0[1-9]|[1-2][0-9]|3[0-1])T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|[\+\-]((1[0-3]|0[0-9]):([0-5][0-9])|14:00))?'`
- **Verbatim RFC Context:**
  > The date-and-time type is a profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. The value of 60 for seconds is allowed only in the case of leap seconds.

### Types: `date`, `date-no-zone`, `time`, `time-no-zone`
- **Base Type:** `string`
- **Constraints:** Extracts and isolates the specific components from the ISO8601 definitions.

### Duration Types: `hours32`, `minutes32`, `seconds32`, `centiseconds32`, `milliseconds32`, `microseconds32`, `microseconds64`, `nanoseconds32`, `nanoseconds64`
- **Base Types:** `int32` / `int64`
- **Constraints:** Pre-calculated bounded integers measuring specific units of time.

### Type: `timeticks` / `timestamp`
- **Base Type:** `uint32`
- **Constraints:** Modulo 2^32 time tracking in hundredths of a second between two epochs.

## 3. Acceptance Criteria
**Given** a time-based schema node
**When** parsing incoming values
**Then** the node MUST execute absolute ISO 8601 profile pattern validation.
**And** leap seconds MUST be gracefully handled if specified as exactly 60.

## 4. Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
