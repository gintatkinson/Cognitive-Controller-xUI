---
title: "Feature: Passive Device Inventory"
epic: "Epic 6: Passive Network Inventory (ietf-nwi-passive-inventory)"
type: "feature"
labels: ["feature", "ietf-nwi-passive-inventory"]
---

# Feature: Passive Device Inventory

## 1. Semantic Grouping Context
This feature logically groups the unmanaged, purely physical termination and splitting devices (such as Optical Distribution Frames and Wavelength Division Multiplexers) that act as junction nodes on the passive network.

## 2. Exhaustive Leaf Constraints

### Grouping: `passive-devices`
- **list passive-device**: `key "id"`
  - **id**: `string`
  - **Uses**: `nwi:basic-common-entity-attributes`
  - **device-type**: `identityref` (Base `passive-device-type`: ODF, WDM, FAT, FDT, ATB)
  - **custom-tags**: `leaf-list string` (e.g. RFID or QR Code strings)
  - **location-ref**: `nil:ni-location-ref` (Leafref binding to geographical coordinates from `ietf-ni-location`)
  - **Uses**: `passive-device-ports`

## 3. Acceptance Criteria
**Given** an unmanaged physical splice terminal
**When** the terminal is added to the inventory schema
**Then** the module MUST validate the `device-type` against the passive identity classifications.
**And** it MUST permit assigning arbitrary string `custom-tags` arrays for proprietary asset-tracking methodologies without schema modification.

## 4. Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
