---
title: "US-22: Conditional Optical Metric Formatting"
type: "user-story"
spec_source: "draft-ygb-ivy-passive-network-inventory"
---

# User Story: Conditional Optical Metric Formatting

## Domain Object Mapping
- **Primary Domain Objects:** `optical-cable` container, `when` constraint
- **Actor/Role:** Schema Validation Engine

## BDD Scenario (OOA/OOD Realization)
**Given** an instantiated cable component
**When** the telemetry payload defines specific decibel attenuation and fiber cores
**Then** the schema validation engine MUST verify the conditional `when` statement evaluating `derived-from-or-self(../cable-type, 'optical-fiber')`.
**And** it MUST reject optical payloads attached to nodes claiming to be electrical or coaxial cables.

## Operational Context
> Container for attributes associated with fiber optic cables. `when "derived-from-or-self(../cable-type, 'optical-fiber')"`.

## Required Features Matrix
- [ ] #83 [Feature: Optical Media Properties]

## Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
