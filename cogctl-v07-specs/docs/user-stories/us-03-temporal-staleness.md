---
title: "US-03: Temporal Staleness Validation"
type: "user-story"
spec_source: "RFC 9179"
---

# User Story: Temporal Staleness Validation

## Domain Object Mapping
- **Primary Domain Objects:** `timestamp`, `valid-until`
- **Actor/Role:** Location Engine

## BDD Scenario (OOA/OOD Realization)
**Given** an incoming geographic location payload
**When** the location record contains a `valid-until` timestamp
**Then** the location engine MUST validate that the current system time is before the `valid-until` boundary.
**And** it MUST reject the location reading as stale if the time is exceeded.

## Operational Context
> The timestamp for which this geo-location is valid until. If unspecified, the geo-location has no specific expiration time.

## Required Features Matrix
- [ ] #28 [Feature: Temporal Validity]

## Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
