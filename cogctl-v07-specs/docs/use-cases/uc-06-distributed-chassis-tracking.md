---
title: "UC-06: Distributed Chassis Component Tracking"
type: "use-case"
spec_source: "draft-ietf-ivy-network-inventory-location"
---

# Use Case: Distributed Chassis Component Tracking

## 1. Actors
- **Primary Actor:** Inventory Telemetry System
- **Secondary Actors:** Maintenance Operators

## 2. Preconditions
- The network features disaggregated routing systems where line cards/chassis are distributed across multiple racks or stand alone directly in a location.

## 3. Trigger
An operator runs a physical audit and issues a query to locate a specific underlying hardware chassis based on a network-element ID.

## 4. Main Success Scenario (Basic Flow)
1. The query hits the location models to resolve the `ne-ref` mapping.
2. The system checks the `locations/location/contained-chassis` list.
3. The system maps the `ne-ref` to the `network-element[ne-id]` successfully.
4. The system checks the `racks/rack/contained-chassis` list and resolves the `relative-position` (U-slot) mapping for rack-mounted variants.
5. The exact physical location (Address + Room + Rack + U-slot) is returned to the operator.

## 5. Alternate and Exception Flows
- **5a. Broken Component Reference:**
  1. The `contained-chassis` defines an `ne-ref` that does not exist in `/nwi:network-inventory/nwi:network-elements`.
  2. The `leafref` constraint fails upon validation.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The exact physical coordinates of both logical software elements and physical hardware chassis are firmly coupled.

## 7. Operational Context
> Chassis directly deployed in this location without rack. Also used for distributed chassis components that are logically part of a network element but physically located.

## 8. Realization Matrix
### Required User Stories
- [ ] #55 [US-10: Hierarchical Location Circularity Prevention]
### Required Features
- [ ] #50 [Feature: Location Hierarchy Management]
- [ ] #52 [Feature: Hardware Rack Structuring]

## Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
