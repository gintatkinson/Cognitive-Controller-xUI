---
title: "US-17: Network Type Augmentation Validation"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-topology"
---

# User Story: Network Type Augmentation Validation

## Domain Object Mapping
- **Primary Domain Objects:** `nw:network-types/nwit:inventory-topology`, `when` constraints
- **Actor/Role:** Topology Validation Engine

## BDD Scenario (OOA/OOD Realization)
**Given** an instantiated RFC 8345 core network graph
**When** the inventory mapping extensions are applied to nodes and links
**Then** the validation engine MUST enforce that the `inventory-topology` container exists in the root `network-types`.
**And** any node or link mappings MUST be fully rejected or ignored if that condition is false.

## Operational Context
> Container for the inventory-topology network type. When present, it signals that the network contains physical-layer augmentations. This network type is intended to serve as the underlay for logical network topologies (Layer 2, Layer 3, Traffic Engineering (TE), etc.).

## Required Features Matrix
- [ ] #71 [Feature: Topology Network Typing]
- [ ] #72 [Feature: Logical Node to Physical NE Mapping]

## Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
