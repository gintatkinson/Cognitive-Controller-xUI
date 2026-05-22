---
title: "US-06: ISO 8601 Temporal Formatting Validation"
type: "user-story"
spec_source: "RFC 9911"
---

# User Story: ISO 8601 Temporal Formatting Validation

## Domain Object Mapping
- **Primary Domain Objects:** `date-and-time`, `date`, `time`
- **Actor/Role:** Telemetry Engine

## BDD Scenario (OOA/OOD Realization)
**Given** an incoming timestamp payload
**When** the payload is mapped to a `date-and-time` field
**Then** the telemetry engine MUST strictly validate the string against the provided ISO 8601 regex pattern.
**And** it MUST enforce that the value of `60` for seconds is only legally permitted in the context of leap seconds.

## Operational Context
> The date-and-time type is a profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. The value of 60 for seconds is allowed only in the case of leap seconds.

## Required Features Matrix
- [ ] #38 [Feature: Date, Time, and Temporal Data Types]

## Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
