---
title: "US-24: Passive to Active Hardware Cross-Referencing"
type: "user-story"
spec_source: "draft-ygb-ivy-passive-network-inventory"
---

# User Story: Passive to Active Hardware Cross-Referencing

## Domain Object Mapping
- **Primary Domain Objects:** `ne-ref`, `component-ref`
- **Actor/Role:** Inventory Orchestrator

## BDD Scenario (OOA/OOD Realization)
**Given** a passive cable physically plugged into an active router port
**When** the cable termination is evaluated as an `active-device`
**Then** the orchestrator MUST map the `ne-ref` to a valid node within `/nwi:network-inventory/nwi:network-elements`.
**And** it MUST map the `component-ref` dynamically down into the specific `nwi:components/nwi:component/nwi:component-id` bounds of that active chassis.

## Operational Context
> Referenced Network Element (NE) and connected active device's component, e.g. port component. Maps using absolute leafrefs crossing module boundaries back into the active core component list.

## Required Features Matrix
- [ ] #82 [Feature: Passive Cable Architecture]

## Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
