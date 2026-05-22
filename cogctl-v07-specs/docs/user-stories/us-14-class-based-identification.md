---
title: "US-14: Class-Based Component Identification"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-yang"
---

# User Story: Class-Based Component Identification

## Domain Object Mapping
- **Primary Domain Objects:** `component/class`
- **Actor/Role:** Validation System

## BDD Scenario (OOA/OOD Realization)
**Given** a newly instantiated hardware or software component inside a Network Element
**When** the component data model is stored
**Then** the validation system MUST strictly enforce the `union` on the `class` identity string.
**And** it MUST be an exact derivative of either `ianahw:hardware-class` or `nwi:non-hardware-component-class`.

## Operational Context
> The type of the component. Mapped dynamically to either a physical IANA hardware baseline class or a logical software-based extension namespace.

## Required Features Matrix
- [ ] #62 [Feature: Component Hardware Attributes]

## Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
