---
title: "UC-10: Optical Transport Breakout Provisioning"
type: "use-case"
spec_source: "draft-ietf-ivy-network-inventory-topology"
---

# Use Case: Optical Transport Breakout Provisioning

## 1. Actors
- **Primary Actor:** Optical Provisioning Engine
- **Secondary Actors:** Field Technicians

## 2. Preconditions
- A dense optical transport node is mapped. A 400G physical port is designated for breakout into four 100G logical channels.

## 3. Trigger
The provisioning engine attempts to assign a logical Termination Point to one of the 100G channels.

## 4. Main Success Scenario (Basic Flow)
1. The engine queries the logical `termination-point` instance.
2. The TP's `inventory-mapping-attributes` resolves its `port-ref` back to the core physical hardware inventory component ID.
3. The engine parses the `port-breakout` presence container.
4. The engine retrieves the list of read-only `breakout-channel` objects (e.g., channels 1-4).
5. The logic confirms that the channel structures are bound and operational, subsequently assigning traffic across the partitioned lanes.

## 5. Alternate and Exception Flows
- **5a. Non-Breakout Capable Port:**
  1. The engine queries a standard 1G copper port.
  2. The `port-breakout` container is completely omitted (absent), correctly communicating to the engine that channelization is unsupported.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The engine accurately maps logical bandwidth to dynamically partitioned physical sub-channels without violating hardware constraints.

## 7. Operational Context
> Breakout capability of the physical port represented by this TP. One TP maps to one physical port; channels are listed here. This container is present only when the underlying hardware supports partitioning the port into multiple independent channels.

## 8. Realization Matrix
### Required User Stories
- [ ] #79 [US-20: Read-Only Channel Breakout Exposure]
### Required Features
- [ ] #74 [Feature: Port Breakout and Termination Mapping]

## Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
