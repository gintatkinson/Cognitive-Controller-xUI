---
title: "US-27: Cross-Layer Node Support Mapping"
type: "user-story"
spec_source: "rfc8345"
---

# User Story: Cross-Layer Node Support Mapping

## Domain Object Mapping
- **Primary Domain Objects:** `supporting-node`, `network-ref`, `node-ref`
- **Actor/Role:** Multi-Layer Topology Engine

## BDD Scenario (OOA/OOD Realization)
**Given** an abstract virtual node representing an IP routing endpoint
**When** the topology engine evaluates its dependencies
**Then** it MUST correctly validate the `supporting-node` mapping utilizing a multi-key mechanism.
**And** it MUST enforce that `network-ref` points successfully to the underlay network defined in `supporting-network`, while `node-ref` points directly to the underlay node within that target array.

## Operational Context
> Represents another node that is in an underlay network and that supports this node. Used to represent layering structure. References the underlay network of which the underlay node is a part. References the underlay node itself.

## Required Features Matrix
- [ ] #96 [Feature: Underlay Network and Node Support]
- [ ] #95 [Feature: Network Node Inventory]

## Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
