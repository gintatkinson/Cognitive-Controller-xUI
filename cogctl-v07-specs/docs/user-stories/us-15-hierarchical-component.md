---
title: "US-15: Hierarchical Component Association"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-yang"
---

# User Story: Hierarchical Component Association

## Domain Object Mapping
- **Primary Domain Objects:** `component/parent`, `component/parent-rel-pos`
- **Actor/Role:** Inventory Sync Service

## BDD Scenario (OOA/OOD Realization)
**Given** a network element containing modular line cards and CPUs
**When** the topology structure is serialized
**Then** the service MUST enforce that the `parent` array uses a strict `leafref` resolving to `../../component/component-id`.
**And** the conditional `parent-rel-pos` MUST only be defined when the `parent` array contains fewer than 2 entries (e.g. `count(../parent) < 2`).

## Operational Context
> The identifiers of all the components that physically contain this component. If this list is empty, this component is not contained in any other component but it is contained in the network-element.

## Required Features Matrix
- [ ] #63 [Feature: Inventory Node Architecture]

## Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
