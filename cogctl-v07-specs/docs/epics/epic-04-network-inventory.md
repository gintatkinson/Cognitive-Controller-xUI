---
title: "Epic 4: Base Network Inventory (ietf-network-inventory)"
type: "epic"
labels: ["epic", "ietf-network-inventory"]
---

# Epic: Base Network Inventory

## 1. Context
This epic encapsulates the structural foundation of the base `ietf-network-inventory` module. It defines a YANG data model for reporting network inventory, establishing the technology-agnostic root layer for Network Elements (NEs) and nested physical/logical Components that can be augmented by other models (e.g., location, geo, optical).

## 2. Structural Features
The following features mathematically define the schema constraints grouped by their semantic domain:

- [ ] #60 - [Feature: Basic Common Entity Attributes](../features/feat-16-basic-entity-attributes.md)
- [ ] #61 - [Feature: Network Element Core Attributes](../features/feat-17-ne-core-attributes.md)
- [ ] #62 - [Feature: Component Hardware Attributes](../features/feat-18-component-hw-attributes.md)
- [ ] #63 - [Feature: Inventory Node Architecture](../features/feat-19-inventory-node-architecture.md)

## 3. Specification Context
> This document defines a base YANG data model for reporting network inventory. The scope of this base model is set to be application- and technology-agnostic. The base data model can be augmented with application- and technology-specific details.

## 4. Source References
YANG Schema: [ietf-network-inventory.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-yang/main/yang/ietf-network-inventory.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-yang](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-yang)
