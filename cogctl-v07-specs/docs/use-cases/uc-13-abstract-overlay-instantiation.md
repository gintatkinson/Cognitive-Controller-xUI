---
title: "UC-13: Abstract Overlay Topology Instantiation"
type: "use-case"
spec_source: "rfc8345"
---

# Use Case: Abstract Overlay Topology Instantiation

## 1. Actors
- **Primary Actor:** Network Path Controller
- **Secondary Actors:** Datastore Sync Engine

## 2. Preconditions
- The network controller requires the creation of a purely logical overlay map abstracting the physical fiber infrastructure below.

## 3. Trigger
The controller provisions a new VPN service routing overlay.

## 4. Main Success Scenario (Basic Flow)
1. The datastore initiates a new `network` list entry keyed dynamically as `urn:ietf:params:xml:ns:yang:test-vpn-overlay`.
2. The specific extension payload injects a presence container directly into `network-types`.
3. Abstract `node` entities representing the logical VPN endpoints are generated and bound via `node-id` URIs.

## 5. Alternate and Exception Flows
- **5a. Invalid URI Mapping:**
  1. The controller attempts to inject an invalid raw string into `network-id` lacking the `inet:uri` constraint structure.
  2. The datastore compilation aborts, preventing illegal key definitions in the root topology base.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The empty abstract base is structurally established, standing by to accept deeper topological links or physical mappings.

## 7. Operational Context
> Describes a network. A network typically contains an inventory of nodes, topological information (augmented through the network-topology data model), and layering information.

## 8. Realization Matrix
### Required User Stories
- [ ] #98 [US-25: Globally Unique Network Identification]
- [ ] #101 [US-28: Extensible Topology Typing]
### Required Features
- [ ] #93 [Feature: Network Topology Architecture]
- [ ] #94 [Feature: Topology Type Augmentation]

## Source References
YANG Schema: [ietf-network@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
