---
title: "UC-05: Data Center Floor Plan Digital Twin"
type: "use-case"
spec_source: "draft-ietf-ivy-network-inventory-location"
---

# Use Case: Data Center Floor Plan Digital Twin

## 1. Actors
- **Primary Actor:** Network Topology System
- **Secondary Actors:** Site Engineers

## 2. Preconditions
- A new core facility has been built and its logical layout needs to be synchronized into the network controller.

## 3. Trigger
The Site Engineer pushes a structured YAML/JSON representing the facility's location hierarchy.

## 4. Main Success Scenario (Basic Flow)
1. The Topology System ingests the root location (Type: `Site`) with a valid physical address.
2. It ingests nested locations (Type: `Room`, `Floor`), correctly validating their `parent` `leafref` links up to the `Site`.
3. It maps `racks` within those locations using `row-number` and `column-number`.
4. It sets the `rack-class` identities (e.g., `rack-secure-high` for core routing rows).
5. The hierarchy is safely stored and broadcast as read-only operational state.

## 5. Alternate and Exception Flows
- **5a. Circular Hierarchy:**
  1. A room is mistakenly assigned a parent that is a rack inside that room.
  2. The validation engine throws an invalid hierarchy cycle error on the `leafref` evaluation.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The exact physical, row, and volumetric footprint of the network equipment is mirrored logically without conflict.
- **Failure Guarantee:** Malformed coordinate links are rejected.

## 7. Operational Context
> Location information with different granularity levels for inventoried network elements. Accurate location information is useful for network planning, deployment, and maintenance.

## 8. Realization Matrix
### Required User Stories
- [ ] #54 [US-09: ISO 3166 Country Code Validation]
- [ ] #55 [US-10: Hierarchical Location Circularity Prevention]
- [ ] #56 [US-11: Metric Hardware Dimension Enforcement]
- [ ] #57 [US-12: Operational State Immutability Enforcement]
### Required Features
- [ ] #49 [Feature: Physical Address Data]
- [ ] #50 [Feature: Location Hierarchy Management]
- [ ] #51 [Feature: Rack Security Classification]
- [ ] #52 [Feature: Hardware Rack Structuring]

## Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
