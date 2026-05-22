---
title: "UC-07: Single-Chassis Network Element Discovery"
type: "use-case"
spec_source: "draft-ietf-ivy-network-inventory-yang"
---

# Use Case: Single-Chassis Network Element Discovery

## 1. Actors
- **Primary Actor:** Network Topology System
- **Secondary Actors:** Telemetry Agents

## 2. Preconditions
- A new standalone switch (single-chassis) connects to the network management overlay.

## 3. Trigger
The telemetry agent executes a NETCONF/RESTCONF GET request on `/network-inventory/network-elements/network-element`.

## 4. Main Success Scenario (Basic Flow)
1. The switch responds with its `ne-id` and `ne-type` defaults to `ne-physical`.
2. It returns its `product-name`, `mfg-name`, and specific `software-rev` including patch lists.
3. The response lists its sub-components (chassis, CPU, line cards, ports).
4. For each sub-component, `asset-id`, `serial-number`, and `is-fru` fields accurately decouple physical units.
5. The standalone chassis component evaluates `is-main` logic to false or omits it completely since there's no multi-chassis cluster.

## 5. Alternate and Exception Flows
- **5a. Malformed Vendor ID:**
  1. The switch drops the `mfg-name`.
  2. The schema accepts this discrepancy, leaving the string blank while retaining the UUID.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The standalone element and its physical sub-parts are completely inventoried under a single recursive tree block.

## 7. Operational Context
> The name of the manufacturer of this entity (e.g., component). The preferred value is the manufacturer name string actually printed on the component itself.

## 8. Realization Matrix
### Required User Stories
- [ ] #65 [US-13: Software Revision Patch Inheritance]
- [ ] #66 [US-14: Class-Based Component Identification]
### Required Features
- [ ] #60 [Feature: Basic Common Entity Attributes]
- [ ] #61 [Feature: Network Element Core Attributes]
- [ ] #62 [Feature: Component Hardware Attributes]

## Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
