---
title: "Epic 5: Network Inventory Topology (ietf-network-inventory-topology)"
type: "epic"
labels: ["epic", "ietf-network-inventory-topology"]
---

# Epic: Network Inventory Topology

## 1. Context
This epic encapsulates the structural foundation bridging logical overlay topologies with physical network elements. Extending RFC 8345, the `ietf-network-inventory-topology` module defines the inventory-topology network type and establishes rigid topological bindings mapping logical Nodes, Links, and Termination Points to physical NEs, port breakouts, and specific link media transmission types.

## 2. Structural Features
The following features mathematically define the schema constraints grouped by their semantic domain:

- [ ] #71 - [Feature: Topology Network Typing](../features/feat-20-topology-network-typing.md)
- [ ] #72 - [Feature: Logical Node to Physical NE Mapping](../features/feat-21-logical-node-mapping.md)
- [ ] #73 - [Feature: Link Physical Media Types](../features/feat-22-link-physical-media.md)
- [ ] #74 - [Feature: Port Breakout and Termination Mapping](../features/feat-23-port-breakout-mapping.md)

## 3. Specification Context
> This document defines a YANG data model that extends the network topology data model (RFC 8345) to map network topologies with inventories. The data model introduces the "inventory-topology" network type and augmentations for physical entity mappings and capabilities, which may be used by any overlay network topology for service provisioning validation.

## 4. Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
