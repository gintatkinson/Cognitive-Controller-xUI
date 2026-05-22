---
title: "UC-17: Service Topology Path Discovery"
type: "use-case"
spec_source: "rfc8345"
---

# Use Case: Service Topology Path Discovery

## 1. Actors
- **Primary Actor:** Traffic Engineering Engine
- **Secondary Actors:** Controller Datastore

## 2. Preconditions
- A full mesh topology has been populated leveraging `link` arrays between instantiated `node` entities.

## 3. Trigger
The engine receives a request to provision a new end-to-end circuit across the topology.

## 4. Main Success Scenario (Basic Flow)
1. The engine queries the `/nw:networks/nw:network` container.
2. It parses the array of `link` entities, extracting the point-to-point connections natively by matching `source-node` against `dest-node`.
3. It validates the exact entrance/exit ports utilizing the strictly typed `source-tp` and `dest-tp` leafrefs.
4. The shortest path routing algorithm computes the graph and the circuit is provisioned.

## 5. Alternate and Exception Flows
- **5a. Dead Node Reference:**
  1. A `link` is injected declaring a `dest-node` that was removed from the topology.
  2. The leafref constraint parsing immediately aborts the configuration, ensuring the topology graph cannot mathematically harbor orphaned connections.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The routing graph maintains mathematically proven integrity, ensuring no "black hole" routes or dead endpoints exist.

## 7. Operational Context
> A network link connects a local (source) node and a remote (destination) node via a set of the respective node's termination points.

## 8. Realization Matrix
### Required User Stories
- [ ] #120 [US-33: Point-to-Point Link Instantiation]
- [ ] #121 [US-34: Node Termination Interface Mapping]
### Required Features
- [ ] #115 [Feature: Network Link Architecture]
- [ ] #116 [Feature: Link Termination Endpoints]
- [ ] #117 [Feature: Node Termination Points]

## Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
