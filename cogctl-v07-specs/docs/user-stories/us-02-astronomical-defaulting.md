---
title: "US-02: Astronomical Defaulting"
type: "user-story"
spec_source: "RFC 9179"
---

# User Story: Astronomical Defaulting

## Domain Object Mapping
- **Primary Domain Objects:** `astronomical-body`, `geodetic-datum`
- **Actor/Role:** Validation System

## BDD Scenario (OOA/OOD Realization)
**Given** an incoming geographic location payload
**When** the `astronomical-body` is not explicitly provided
**Then** the validation system MUST implicitly assign it the value `earth`.
**And** it MUST implicitly assume the `geodetic-datum` defaults to `wgs-84`.

## Operational Context
> The default when the astronomical body is 'earth' is 'wgs-84', which is used by the Global Positioning System (GPS).

## Required Features Matrix
- [ ] #24 [Feature: Geographic Reference Frame]

## Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
