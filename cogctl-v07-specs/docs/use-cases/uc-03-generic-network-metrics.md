---
title: "UC-03: Defining Generic Network Management Metrics"
type: "use-case"
spec_source: "RFC 9911"
---

# Use Case: Defining Generic Network Management Metrics

## 1. Actors
- **Primary Actor:** Network Modeling Framework
- **Secondary Actors:** Telemetry Agents

## 2. Preconditions
- A system schema intends to track quantitative traffic measurements.

## 3. Trigger
The schema developer imports `ietf-yang-types` and defines an interface tracking property.

## 4. Main Success Scenario (Basic Flow)
1. The developer assigns `counter64` to a high-throughput interface packet counter.
2. The developer assigns `gauge32` to the current CPU utilization metric.
3. The telemetry agent initializes the metrics when booted.
4. As packets flow, `counter64` strictly increments.
5. As CPU load changes, `gauge32` arbitrarily climbs and falls without exceeding 2^32-1.
6. When `counter64` hits 2^64-1, the agent wraps it to 0 and continues scaling.

## 5. Alternate and Exception Flows
- **5a. Negative Input on Counters:**
  1. If a process attempts to subtract from a counter, the validation layer strictly rejects it as mathematically invalid.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The node effectively bounds and calculates metrics identically across vendors.
- **Failure Guarantee:** Value updates violating the structural type bounds are rejected.

## 7. Operational Context
> Counters have no defined 'initial' value, and thus, a single value of a counter has (in general) no information content. Discontinuities in the monotonically increasing value normally occur at re-initialization.

## 8. Realization Matrix
### Required User Stories
- [ ] #43 [US-05: Wrapping Counter Bounds Enforcement]
### Required Features
- [ ] #36 [Feature: Counter and Gauge Data Types]

## Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
