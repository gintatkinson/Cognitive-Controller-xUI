---
title: "US-25: Globally Unique Network Identification"
type: "user-story"
spec_source: "rfc8345"
---

# User Story: Globally Unique Network Identification

## Domain Object Mapping
- **Primary Domain Objects:** `network-id`, `node-id`, `inet:uri`
- **Actor/Role:** Topology Orchestrator

## BDD Scenario (OOA/OOD Realization)
**Given** an instantiated network overlay or underlay
**When** the topology orchestrator registers the definition
**Then** the orchestrator MUST assign a `network-id` adhering to the `inet:uri` string format.
**And** any nodes instantiated within the array MUST similarly expose their `node-id` strictly as an `inet:uri`.

## Operational Context
> Identifier for a network. The precise structure of the network-id will be up to the implementation. The identifier SHOULD be chosen such that the same network will always be identified through the same identifier, even if the data model is instantiated in separate datastores.

## Required Features Matrix
- [ ] #93 [Feature: Network Topology Architecture]
- [ ] #95 [Feature: Network Node Inventory]

## Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
