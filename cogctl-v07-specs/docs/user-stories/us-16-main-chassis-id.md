---
title: "US-16: Main Chassis Role Identification"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-yang"
---

# User Story: Main Chassis Role Identification

## Domain Object Mapping
- **Primary Domain Objects:** `component/is-main`, `component/class`
- **Actor/Role:** Hardware Mapping Engine

## BDD Scenario (OOA/OOD Realization)
**Given** a network element definition containing multiple physical chasses
**When** the orchestrator evaluates the `is-main` boolean variable
**Then** the engine MUST strictly enforce the `when` condition requiring `derived-from-or-self(../nwi:class, 'ianahw:chassis')`.
**And** it MUST omit this field entirely for standard line cards, ports, or single-chassis switches.

## Operational Context
> This node indicates whether the chassis is taking or not the 'main' role. This node is applicable only to scenarios where the network element contains chassis components which can take or not the 'main' role (e.g., multi-chassis network elements).

## Required Features Matrix
- [ ] #63 [Feature: Inventory Node Architecture]

## Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
