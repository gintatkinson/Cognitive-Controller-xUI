---
title: "US-13: Software Revision Patch Inheritance"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-yang"
---

# User Story: Software Revision Patch Inheritance

## Domain Object Mapping
- **Primary Domain Objects:** `software-rev`, `software-rev/patch`
- **Actor/Role:** Telemetry Engine

## BDD Scenario (OOA/OOD Realization)
**Given** a discovered network element with actively running software modules
**When** the software inventory is queried
**Then** the engine MUST group modules logically by their primary vendor `name`.
**And** any hot-fixes or transient code patches MUST be nested under the specific software `revision` string instance currently active.

## Operational Context
> The list of software patches configured to be active for the software module. The vendor-specific revision string of the software patch when not implicitly defined as part of the name or revision.

## Required Features Matrix
- [ ] #61 [Feature: Network Element Core Attributes]

## Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
