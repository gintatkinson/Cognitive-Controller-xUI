---
title: "US-10: Hierarchical Location Circularity Prevention"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-location"
---

# User Story: Hierarchical Location Circularity Prevention

## Domain Object Mapping
- **Primary Domain Objects:** `location/parent`
- **Actor/Role:** Topology Engine

## BDD Scenario (OOA/OOD Realization)
**Given** a nested list of network equipment location entries
**When** a `parent` node is defined for a child location
**Then** the topology engine MUST enforce that the `leafref` resolves strictly to `../../location/id`.
**And** it MUST prevent recursive loop associations where a parent references its own child.

## Operational Context
> The identifier of the location that physically contains this location.

## Required Features Matrix
- [ ] #50 [Feature: Location Hierarchy Management]

## Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
