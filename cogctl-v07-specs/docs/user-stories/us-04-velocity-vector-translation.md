---
title: "US-04: Velocity Vector Translation"
type: "user-story"
spec_source: "RFC 9179"
---

# User Story: Velocity Vector Translation

## Domain Object Mapping
- **Primary Domain Objects:** `v-north`, `v-east`, `v-up`
- **Actor/Role:** Location Engine

## BDD Scenario (OOA/OOD Realization)
**Given** a moving node generating location telemetry
**When** the telemetry includes trajectory speed
**Then** the location engine MUST translate the speed into the three distinct axis vectors (`v-north`, `v-east`, `v-up`).
**And** it MUST measure these changes with up to 12 decimal fraction precision in meters per second.

## Operational Context
> Rate of change (i.e., speed) towards true north, perpendicular to the right of true north, and further from the center of the reference frame, as defined by the geodetic-system.

## Required Features Matrix
- [ ] #27 [Feature: Velocity Vector]

## Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
