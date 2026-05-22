---
title: "UC-01: Standard Earth-Bound Telemetry Logging"
type: "use-case"
spec_source: "RFC 9179"
---

# Use Case: Standard Earth-Bound Telemetry Logging

## 1. Actors
- **Primary Actor:** Networking Asset (e.g., Router)
- **Secondary Actors:** Controller / Location Engine

## 2. Preconditions
- The networking asset is active and acquiring GPS/GNSS signals.

## 3. Trigger
The asset needs to report its current physical location to the Controller.

## 4. Main Success Scenario (Basic Flow)
1. Asset captures ellipsoid coordinates (latitude, longitude, height).
2. Asset generates the `geo-location` object.
3. Asset implicitly defaults the reference frame to Earth and WGS-84.
4. Asset transmits the telemetry to the Controller.
5. Controller validates the fraction digit precision of the coordinates.
6. Controller records the geographic location.

## 5. Alternate and Exception Flows
- **5a. Coordinate Precision Error:**
  1. If latitude or longitude fraction digits are improperly generated, Controller aborts validation.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** Location is registered under the WGS-84 datum on Earth.
- **Failure Guarantee:** Location update is rejected.

## 7. Operational Context
> A geodetic-datum defining the meaning of latitude, longitude, and height. The default when the astronomical body is 'earth' is 'wgs-84', which is used by the Global Positioning System (GPS).

## 8. Realization Matrix
### Required User Stories
- [ ] #30 [US-01: Coordinate Choice Exclusivity]
- [ ] #31 [US-02: Astronomical Defaulting]
### Required Features
- [ ] #25 [Feature: Ellipsoid Location Choice]
- [ ] #24 [Feature: Geographic Reference Frame]

## Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
