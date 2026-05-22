---
title: "US-09: ISO 3166 Country Code Validation"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-location"
---

# User Story: ISO 3166 Country Code Validation

## Domain Object Mapping
- **Primary Domain Objects:** `physical-address/country-code`
- **Actor/Role:** Validation System

## BDD Scenario (OOA/OOD Realization)
**Given** a network element configuration containing a physical address
**When** the `country-code` value is supplied
**Then** the system MUST strictly execute an alpha-boundary check against the `'[A-Z]{2}'` regex.
**And** any invalid, lower-cased, or numeric entries must be rejected as schema violations.

## Operational Context
> Specifies a country. Expressed as ISO ALPHA-2 code.

## Required Features Matrix
- [ ] #49 [Feature: Physical Address Data]

## Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
