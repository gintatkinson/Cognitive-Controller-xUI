---
title: "UC-04: Enforcing Cross-Protocol Data Formatting"
type: "use-case"
spec_source: "RFC 9911"
---

# Use Case: Enforcing Cross-Protocol Data Formatting

## 1. Actors
- **Primary Actor:** Edge Controller API
- **Secondary Actors:** Upstream Management Systems

## 2. Preconditions
- The controller receives standard hardware metrics (MAC addresses, timestamps) from varied devices over various protocols.

## 3. Trigger
An inbound network configuration packet is received.

## 4. Main Success Scenario (Basic Flow)
1. Controller parses a `mac-address` field and translates it to canonical lowercase hex bytes divided by colons.
2. Controller parses a `date-and-time` field.
3. Controller detects the time-zone format constraints and validates the timezone boundaries and ISO 8601 formatting.
4. The system validates the `uuid` regex pattern.
5. The normalized, canonical data types are stored efficiently in the configuration datastore.

## 5. Alternate and Exception Flows
- **5a. Invalid Temporal Segment:**
  1. A timestamp of `1999-13-40T25:99:60Z` is detected.
  2. The schema rejects the month `13`, day `40`, hour `25` constraints native to `date-and-time`.
  3. The controller aborts the write operation.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The datastore guarantees normalized string schemas for identifiers, timestamps, and hardware addresses.
- **Failure Guarantee:** Improper strings are quarantined.

## 7. Operational Context
> The canonical format for date-and-time values with a known time zone uses a numeric time zone offset that is calculated using the device's configured known offset to UTC time.

## 8. Realization Matrix
### Required User Stories
- [ ] #44 [US-06: ISO 8601 Temporal Formatting Validation]
- [ ] #45 [US-07: UUID String Representation Enforcement]
- [ ] #46 [US-08: MAC and Physical Address Canonicalization]
### Required Features
- [ ] #38 [Feature: Date, Time, and Temporal Data Types]
- [ ] #40 [Feature: Specialized String Data Types]
- [ ] #39 [Feature: Network Address Data Types]

## Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
