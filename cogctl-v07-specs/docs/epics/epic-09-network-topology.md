---
title: "Epic 9: Base Network Topology Connectivity (ietf-network-topology)"
type: "epic"
labels: ["epic", "ietf-network-topology"]
---

# Epic: Base Network Topology Connectivity

## 1. Context
This epic encapsulates the structural extension provided by the `ietf-network-topology` YANG module (RFC 8345). It extends the base abstract node and network architecture mapped in Epic 7 by supplying the rigid point-to-point graph components: Links and Termination Points. This completes the abstract networking topology base schema.

## 2. Structural Features
The following features mathematically define the schema constraints grouped by their semantic domain:

- [ ] #115 - [Feature: Network Link Architecture](../features/feat-36-network-link-architecture.md)
- [ ] #116 - [Feature: Link Termination Endpoints](../features/feat-37-link-termination-endpoints.md)
- [ ] #117 - [Feature: Node Termination Points](../features/feat-38-node-termination-points.md)
- [ ] #118 - [Feature: Underlay Topological Support Mapping](../features/feat-39-underlay-topology-mapping.md)

## 3. Specification Context
> This module defines a common base model for a network topology, augmenting the base network data model with links to connect nodes, as well as termination points to terminate links on nodes.

## 4. Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
