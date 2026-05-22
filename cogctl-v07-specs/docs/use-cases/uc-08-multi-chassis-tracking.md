---
title: "UC-08: Multi-Chassis Cluster Inventory Tracking"
type: "use-case"
spec_source: "draft-ietf-ivy-network-inventory-yang"
---

# Use Case: Multi-Chassis Cluster Inventory Tracking

## 1. Actors
- **Primary Actor:** Core Routing Management Plane
- **Secondary Actors:** Hardware Operations Teams

## 2. Preconditions
- A massive core routing cluster composed of several distinct hardware chassis operating as a single logical network element is deployed.

## 3. Trigger
The management plane ingests the node cluster configuration into the network inventory schema.

## 4. Main Success Scenario (Basic Flow)
1. The cluster represents itself as a single `network-element` via a unified `ne-id`.
2. The `components` list initializes multiple distinct `ianahw:chassis` classed components.
3. The orchestration layer evaluates `is-main` logic, identifying the active control-plane chassis as `true` and the standby/fabric chassis as `false`.
4. Individual line cards inside each chassis use the `parent` list to link via `leafref` to their specific physical chassis.
5. `parent-rel-pos` provides the specific slot location mapping (e.g. Slot 4 in Chassis 2).

## 5. Alternate and Exception Flows
- **5a. Circular Chassis Recursion:**
  1. A configuration misstep sets Chassis 1's `parent` as Chassis 2, and Chassis 2's `parent` as Chassis 1.
  2. The validation agent rejects the update due to circular leafref validation errors.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The inventory correctly encapsulates horizontally scaled clusters within a single logical entity while preserving strict physical parent/child chassis lineage.

## 7. Operational Context
> The relative position with respect to the parent component among all the sibling components. Applicable only when this component is contained in only one parent component.

## 8. Realization Matrix
### Required User Stories
- [ ] #67 [US-15: Hierarchical Component Association]
- [ ] #68 [US-16: Main Chassis Role Identification]
### Required Features
- [ ] #63 [Feature: Inventory Node Architecture]

## Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
