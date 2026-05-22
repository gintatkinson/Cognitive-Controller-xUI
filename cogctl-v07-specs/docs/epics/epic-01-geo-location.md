---
title: "Epic 1: Geographic Location (ietf-geo-location)"
type: "epic"
labels: ["epic", "ietf-geo-location"]
---

# Epic: Geographic Location

## 1. Context
This epic encapsulates the structural foundation of the `ietf-geo-location` YANG module as defined in RFC 9179. It provides the base groupings for mapping arbitrary coordinate systems to a network element.

## 2. Structural Features
The following features mathematically define the schema constraints grouped by their semantic domain:

- [ ] #24 - [Feature: Geographic Reference Frame](../features/feat-01-reference-frame.md)
- [ ] #25 - [Feature: Ellipsoid Location Choice](../features/feat-02-ellipsoid-location.md)
- [ ] #26 - [Feature: Cartesian Location Choice](../features/feat-03-cartesian-location.md)
- [ ] #27 - [Feature: Velocity Vector](../features/feat-04-velocity-vector.md)
- [ ] #28 - [Feature: Temporal Validity](../features/feat-05-temporal-validity.md)

## 3. Specification Context
> This document defines a generic geographical location YANG grouping. The geographical location grouping is intended to be used in YANG models for location-based asset management or where a specific location is required.

## 4. Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
