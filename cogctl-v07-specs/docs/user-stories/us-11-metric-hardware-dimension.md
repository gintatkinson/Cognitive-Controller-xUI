---
title: "US-11: Metric Hardware Dimension Enforcement"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-location"
---

# User Story: Metric Hardware Dimension Enforcement

## Domain Object Mapping
- **Primary Domain Objects:** `rack/height`, `rack/width`, `rack/depth`, `rack/max-voltage`, `rack/max-allocated-power`
- **Actor/Role:** Data Center Management System

## BDD Scenario (OOA/OOD Realization)
**Given** the dimensions of a physical rack instance
**When** the bounds are processed by the inventory system
**Then** the dimensions (height, width, depth) MUST be interpreted strictly as `uint16` values in `millimeter` units.
**And** electrical limits (max-voltage, max-allocated-power) MUST be strictly bounded as `uint16` in `volt` and `watts` units, preventing negative allocations or floating-point anomalies.

## Operational Context
> Top-level container for the list of racks. Defines rack height, width, depth, and maximum allocated power limits in precise hardware units.

## Required Features Matrix
- [ ] #52 [Feature: Hardware Rack Structuring]

## Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
