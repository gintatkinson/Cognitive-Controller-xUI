---
title: "UC-09: SDN Controller Topology Discovery"
type: "use-case"
spec_source: "draft-ietf-ivy-network-inventory-topology"
---

# Use Case: SDN Controller Topology Discovery

## 1. Actors
- **Primary Actor:** SDN Controller
- **Secondary Actors:** Telemetry Agents, Inventory Database

## 2. Preconditions
- A foundational layer-2/layer-3 logical topology is populated in the SDN Controller.
- The base `network-inventory` module has mapped all physical hardware.

## 3. Trigger
The SDN controller executes a topology sync against the physical underlying infrastructure to compute hardware failure domains.

## 4. Main Success Scenario (Basic Flow)
1. The SDN controller queries the `ietf-network` data-store.
2. The network verifies it holds the `inventory-topology` network type extension.
3. For each logical `node`, the `inventory-mapping-attributes` securely resolves its `ne-ref` to the base physical chassis.
4. For each `link`, the controller reads the `link-type` to determine media capability (e.g. identifying a microwave backhaul vs a terrestrial fiber run).
5. The controller computes shared risk link groups (SRLG) directly from the underlying hardware bindings.

## 5. Alternate and Exception Flows
- **5a. Unknown Link Media:**
  1. A logical link lacks verifiable telemetry.
  2. The schema enforces a fallback to the `unknown` identity classification instead of throwing an unhandled exception.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The overlay logical topology is seamlessly and deterministically mapped to the root physical hardware components.

## 7. Operational Context
> Container for the inventory-topology network type. When present, it signals that the network contains physical-layer augmentations. This network type is intended to serve as the underlay for logical network topologies.

## 8. Realization Matrix
### Required User Stories
- [ ] #76 [US-17: Network Type Augmentation Validation]
- [ ] #77 [US-18: Physical Link Media Classification]
- [ ] #78 [US-19: 1:1 Logical Node to Physical Element Correlation]
### Required Features
- [ ] #71 [Feature: Topology Network Typing]
- [ ] #72 [Feature: Logical Node to Physical NE Mapping]
- [ ] #73 [Feature: Link Physical Media Types]

## Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
