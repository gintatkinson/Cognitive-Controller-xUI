---
title: "UC-14: Multi-Layer Topology Path Calculation"
type: "use-case"
spec_source: "rfc8345"
---

# Use Case: Multi-Layer Topology Path Calculation

## 1. Actors
- **Primary Actor:** SDN Traffic Engineering (TE) Engine
- **Secondary Actors:** Telemetry Correlation Database

## 2. Preconditions
- A full 3-layer topology is modeled (VPN Service Overlay -> IP Routing Layer -> Physical Optical Layer).

## 3. Trigger
A fiber cut occurs at the optical layer; the TE engine recursively evaluates the impact footprint on upper-layer traffic.

## 4. Main Success Scenario (Basic Flow)
1. The engine detects the failure on the specific physical `node` mapping.
2. It parses vertically upward using recursive datastore lookups, resolving the nodes utilizing the failing asset via `supporting-node`.
3. The engine follows the `leafref` chains across `network-ref` domains, bridging from the optical layer `network-id` back to the IP routing layer.
4. Final impact footprint calculates that the affected abstract nodes are cleanly resolved and traffic engineering reroutes are fired.

## 5. Alternate and Exception Flows
- **5a. Broken Leafref Validation:**
  1. An orchestrator deletes a physical node while a virtual node still declares it as a `supporting-node`.
  2. The datastore enforces referential integrity preventing the deletion.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The strict multi-layer binding model enables instantaneous multi-tier dependency mapping between overlay abstractions and their physical transport backbones.

## 7. Operational Context
> An underlay network, used to represent layered network topologies. Represents another node that is in an underlay network and that supports this node. Used to represent layering structure.

## 8. Realization Matrix
### Required User Stories
- [ ] #99 [US-26: Cross-Layer Network Support Mapping]
- [ ] #100 [US-27: Cross-Layer Node Support Mapping]
### Required Features
- [ ] #95 [Feature: Network Node Inventory]
- [ ] #96 [Feature: Underlay Network and Node Support]

## Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
