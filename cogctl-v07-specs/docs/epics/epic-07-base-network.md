---
title: "Epic 7: Base Network Topology (ietf-network)"
type: "epic"
labels: ["epic", "ietf-network"]
---

# Epic: Base Network Topology

## 1. Context
This epic encapsulates the purely abstract foundation of the IETF topological data model, commonly referred to as RFC 8345. It defines the root `networks` container and provides the recursive structural arrays required to model complex network overlays and their corresponding physical or virtual underlays.

## 2. Structural Features
The following features mathematically define the schema constraints grouped by their semantic domain:

- [ ] #93 - [Feature: Network Topology Architecture](../features/feat-28-network-topology-architecture.md)
- [ ] #94 - [Feature: Topology Type Augmentation](../features/feat-29-topology-type-augmentation.md)
- [ ] #95 - [Feature: Network Node Inventory](../features/feat-30-network-node-inventory.md)
- [ ] #96 - [Feature: Underlay Network and Node Support](../features/feat-31-underlay-network-support.md)

## 3. Specification Context
> This document defines an abstract (generic, or base) YANG data model for network/service topologies and inventories. The data model serves as a base model that is augmented with technology-specific details in other, more specific topology and inventory data models.

## 4. Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
