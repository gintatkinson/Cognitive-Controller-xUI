---
title: "US-12: Operational State Immutability Enforcement"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-location"
---

# User Story: Operational State Immutability Enforcement

## Domain Object Mapping
- **Primary Domain Objects:** `locations`, `racks`
- **Actor/Role:** Access Control System

## BDD Scenario (OOA/OOD Realization)
**Given** the `locations` and `racks` containers within the inventory
**When** an external controller attempts a configuration push (write) to these schemas
**Then** the access control system MUST reject the request.
**And** it MUST enforce that the data represents purely operational state mapping (`config false`).

## Operational Context
> Location information cannot be obtained or verified from the Network Elements themselves. The containers `locations` and `racks` are defined as `config false`.

## Required Features Matrix
- [ ] #50 [Feature: Location Hierarchy Management]
- [ ] #52 [Feature: Hardware Rack Structuring]

## Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
