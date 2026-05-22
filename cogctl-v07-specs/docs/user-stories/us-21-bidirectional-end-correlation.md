---
title: "US-21: Bidirectional Device End Correlation"
type: "user-story"
spec_source: "draft-ygb-ivy-passive-network-inventory"
---

# User Story: Bidirectional Device End Correlation

## Domain Object Mapping
- **Primary Domain Objects:** `connected-device-ref/a-end`, `connected-device-ref/z-end`, `choice connected-device-type`
- **Actor/Role:** Physical Layer Sync Engine

## BDD Scenario (OOA/OOD Realization)
**Given** a physical cable spanning two endpoint devices
**When** the cable object is synchronized into the inventory datastore
**Then** the engine MUST populate both the `a-end` and `z-end` containers accurately.
**And** it MUST enforce the `choice` data node resolving each side distinctly as either a purely `passive` terminal or an `active` hardware component.

## Operational Context
> Attributes applicable to connected devices. A-end device reference and Z-end device reference. Device end based on the type of connected device (passive or active).

## Required Features Matrix
- [ ] #82 [Feature: Passive Cable Architecture]

## Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
