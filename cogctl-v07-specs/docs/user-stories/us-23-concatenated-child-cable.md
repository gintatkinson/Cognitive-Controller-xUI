---
title: "US-23: Concatenated Child Cable Linking"
type: "user-story"
spec_source: "draft-ygb-ivy-passive-network-inventory"
---

# User Story: Concatenated Child Cable Linking

## Domain Object Mapping
- **Primary Domain Objects:** `child-cable` list, `min-elements` constraint
- **Actor/Role:** Splicing Documentation Agent

## BDD Scenario (OOA/OOD Realization)
**Given** a long-haul optical link comprising multiple spliced segments
**When** the root cable asset is documented
**Then** the agent MUST serialize the ordered concatenation array inside the `child-cable` list using an explicit integer `index`.
**And** the data model MUST enforce a hard restriction of `min-elements 2` to prevent single-segment child definitions.

## Operational Context
> Ordered list of concatenated child cables. An index number used to identify the concatenation order of the child cables.

## Required Features Matrix
- [ ] #82 [Feature: Passive Cable Architecture]

## Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
