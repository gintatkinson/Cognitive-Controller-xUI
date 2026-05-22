---
title: "US-19: 1:1 Logical Node to Physical Element Correlation"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-topology"
---

# User Story: 1:1 Logical Node to Physical Element Correlation

## Domain Object Mapping
- **Primary Domain Objects:** `node/inventory-mapping-attributes/ne-ref`
- **Actor/Role:** Topology Integration Service

## BDD Scenario (OOA/OOD Realization)
**Given** an instantiated logical network topology node (e.g. OSPF router)
**When** the topology integration service synchronizes hardware status
**Then** the service MUST map the node using a strict `leafref` securely bound to the `nwi:ne-id` in the core network inventory.
**And** the mapping MUST establish a definitive 1:1 correlation between the logical representation and the physical chassis.

## Operational Context
> Reference to the NE in the inventory that corresponds to this topology node. This reference establishes a 1:1 mapping between the logical node and its physical NE.

## Required Features Matrix
- [ ] #72 [Feature: Logical Node to Physical NE Mapping]

## Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
