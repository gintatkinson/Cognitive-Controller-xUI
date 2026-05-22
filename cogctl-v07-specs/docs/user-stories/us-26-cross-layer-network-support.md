---
title: "US-26: Cross-Layer Network Support Mapping"
type: "user-story"
spec_source: "rfc8345"
---

# User Story: Cross-Layer Network Support Mapping

## Domain Object Mapping
- **Primary Domain Objects:** `supporting-network/network-ref`
- **Actor/Role:** Multi-Layer Topology Engine

## BDD Scenario (OOA/OOD Realization)
**Given** an overlay virtual topology spanning multiple datacenters
**When** the topology engine evaluates the network's dependencies
**Then** the engine MUST map the logical `supporting-network` array down to an existing `network-id` located at the root `/nw:networks/nw:network` path using a `leafref`.

## Operational Context
> An underlay network, used to represent layered network topologies. Used to reference a network -- for example, an underlay network.

## Required Features Matrix
- [ ] #96 [Feature: Underlay Network and Node Support]

## Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
