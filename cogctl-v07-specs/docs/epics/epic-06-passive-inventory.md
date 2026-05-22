---
title: "Epic 6: Passive Network Inventory (ietf-nwi-passive-inventory)"
type: "epic"
labels: ["epic", "ietf-nwi-passive-inventory"]
---

# Epic: Passive Network Inventory

## 1. Context
This epic encapsulates the unmanaged, physical transmission underlay defined by `ietf-nwi-passive-inventory`. The module acts as an augmentation extending the active electronic hardware tree (`ietf-network-inventory`) with physical infrastructure: raw optical fibers, electrical cables, distribution frames, splices, and non-powered junction endpoints.

## 2. Structural Features
The following features mathematically define the schema constraints grouped by their semantic domain:

- [ ] #82 - [Feature: Passive Cable Architecture](../features/feat-24-passive-cable-architecture.md)
- [ ] #83 - [Feature: Optical Media Properties](../features/feat-25-optical-media-properties.md)
- [ ] #84 - [Feature: Passive Device Inventory](../features/feat-26-passive-device-inventory.md)
- [ ] #85 - [Feature: Passive Port Interfaces](../features/feat-27-passive-port-interfaces.md)

## 3. Specification Context
> This document presents a YANG data model for tracking and managing passive network inventory. The model enhances the base model outlined in draft-ietf-ivy-network-inventory-yang and is intended for use in the northbound interface of a domain controller. This module specifies a data model for passive devices, such as fibers, cables, and passive sites, deployed within and between network elements.

## 4. Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
