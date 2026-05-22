---
title: "UC-11: Point-to-Multipoint Optical Fiber Splice"
type: "use-case"
spec_source: "draft-ygb-ivy-passive-network-inventory"
---

# Use Case: Point-to-Multipoint Optical Fiber Splice

## 1. Actors
- **Primary Actor:** Fiber Documentation System
- **Secondary Actors:** Geographic Information System (GIS)

## 2. Preconditions
- A passive Optical Distribution Frame (ODF) is deployed acting as a splitter bridging a backbone fiber run to multiple branch distributions.

## 3. Trigger
An operations engineer documents the physical splice and runs inside the passive inventory schema.

## 4. Main Success Scenario (Basic Flow)
1. The system creates a `passive-device` of type `ODF`.
2. It assigns an `a-end` `optical-fiber` cable mapped as a `backbone` role.
3. The ODF internally declares multiple `passive-port` interfaces using the `p2mp-port` mapping identity.
4. Multiple access drops are created and bound to the ODF utilizing `connected-device-ref` mapping back to their subsequent FAT endpoints.
5. `attenuation` metrics are appended to each discrete `child-cable` traversing the splices.

## 5. Alternate and Exception Flows
- **5a. Broken Leafref Binding:**
  1. An engineer accidentally targets a Z-end mapped to a non-existent chassis.
  2. The system's cross-module validation rejects the `ne-ref` violation against the active `ietf-network-inventory` schema tree.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The passive optical lightpath is deterministically mapped end-to-end entirely within the inventory structures, retaining full structural integrity of splices.

## 7. Operational Context
> Attributes applicable to passive device ports. Type of passive port. Service port, Input port, Output port, or p2mp-port.

## 8. Realization Matrix
### Required User Stories
- [ ] #87 [US-21: Bidirectional Device End Correlation]
- [ ] #89 [US-23: Concatenated Child Cable Linking]
### Required Features
- [ ] #82 [Feature: Passive Cable Architecture]
- [ ] #83 [Feature: Optical Media Properties]
- [ ] #85 [Feature: Passive Port Interfaces]

## Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
