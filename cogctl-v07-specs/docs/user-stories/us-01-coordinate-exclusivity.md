---
title: "US-01: Coordinate Choice Exclusivity"
type: "user-story"
spec_source: "RFC 9179"
---

# User Story: Coordinate Choice Exclusivity

## Domain Object Mapping
- **Primary Domain Objects:** `location` (choice)
- **Actor/Role:** Telemetry Engine

## BDD Scenario (OOA/OOD Realization)
**Given** the telemetry engine is recording a geographic location
**When** the configuration is applied
**Then** the engine MUST enforce exclusivity between the `ellipsoid` location definition and the `cartesian` location definition.

## Operational Context
> The location is a choice between an ellipsoid coordinate system and a cartesian coordinate system. An implementation should support both, but only one can be active at a time.

## Required Features Matrix
- [ ] #25 [Feature: Ellipsoid Location Choice]
- [ ] #26 [Feature: Cartesian Location Choice]

## Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
