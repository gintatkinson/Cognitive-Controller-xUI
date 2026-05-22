---
title: "US-28: Extensible Topology Typing"
type: "user-story"
spec_source: "rfc8345"
---

# User Story: Extensible Topology Typing

## Domain Object Mapping
- **Primary Domain Objects:** `network-types`
- **Actor/Role:** Technology Extension Framework

## BDD Scenario (OOA/OOD Realization)
**Given** a custom technology implementation (e.g. Optical Transport or BGP-LS)
**When** the module is mounted against the RFC 8345 base model
**Then** the framework MUST permit appending an empty presence container specifically into the `network-types` tree to properly declare the topological format.

## Operational Context
> Serves as an augmentation target. The network type is indicated through corresponding presence containers augmented into this container.

## Required Features Matrix
- [ ] #94 [Feature: Topology Type Augmentation]

## Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
