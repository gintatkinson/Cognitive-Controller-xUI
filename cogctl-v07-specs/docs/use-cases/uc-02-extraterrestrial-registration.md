---
title: "UC-02: Non-Earth/Extraterrestrial Node Registration"
type: "use-case"
spec_source: "RFC 9179"
---

# Use Case: Non-Earth/Extraterrestrial Node Registration

## 1. Actors
- **Primary Actor:** Extraterrestrial Asset (e.g., Lunar Rover, Deep Space Probe)
- **Secondary Actors:** Controller / Location Engine

## 2. Preconditions
- The asset is deployed off-world and has determined its coordinates.

## 3. Trigger
The asset reports its physical location via telemetry back to Earth.

## 4. Main Success Scenario (Basic Flow)
1. Asset determines its location using Cartesian X, Y, Z vectors.
2. Asset explicitly sets the `astronomical-body` (e.g., 'moon', 'mars').
3. Asset generates the `geo-location` object.
4. Asset transmits the Cartesian coordinates.
5. Controller validates the coordinate accuracy and registers the absolute spatial volume position relative to the specified celestial body.

## 5. Alternate and Exception Flows
- **5a. Missing Reference Body:**
  1. If `astronomical-body` is not specified, it defaults to Earth, rendering the Cartesian coordinates invalid relative to the intended body.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** Location is registered accurately off-world using absolute spatial measurements.
- **Failure Guarantee:** Location is corrupted due to improper datum application.

## 7. Operational Context
> The location is a choice between an ellipsoid coordinate system and a cartesian coordinate system. This ensures the generic geographical location YANG grouping can be used for extraterrestrial applications (e.g., lunar colonies).

## 8. Realization Matrix
### Required User Stories
- [ ] #30 [US-01: Coordinate Choice Exclusivity]
### Required Features
- [ ] #26 [Feature: Cartesian Location Choice]
- [ ] #24 [Feature: Geographic Reference Frame]

## Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
