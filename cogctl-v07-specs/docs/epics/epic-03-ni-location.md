---
title: "Epic 3: Network Inventory Location (ietf-ni-location)"
type: "epic"
labels: ["epic", "ietf-ni-location"]
---

# Epic: Network Inventory Location

## 1. Context
This epic encapsulates the structural extension of the base `ietf-network-inventory` module by introducing spatial context. It defines a YANG data model for providing location information with varying granularity levels (sites, rooms, racks) for inventoried network elements, crucial for network planning and maintenance.

## 2. Structural Features
The following features mathematically define the schema constraints grouped by their semantic domain:

- [ ] #49 - [Feature: Physical Address Data](../features/feat-12-physical-address-data.md)
- [ ] #50 - [Feature: Location Hierarchy Management](../features/feat-13-location-hierarchy-mgmt.md)
- [ ] #51 - [Feature: Rack Security Classification](../features/feat-14-rack-security-class.md)
- [ ] #52 - [Feature: Hardware Rack Structuring](../features/feat-15-hardware-rack-structuring.md)

## 3. Specification Context
> Accurate location information is useful for network planning, deployment, and maintenance. However, such information cannot be obtained or verified from the Network Elements themselves. This document defines a location model for network inventory that extends the base inventory with comprehensive location data.

## 4. Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
