---
title: "UC-12: Passive Asset Tagging and Localization"
type: "use-case"
spec_source: "draft-ygb-ivy-passive-network-inventory"
---

# Use Case: Passive Asset Tagging and Localization

## 1. Actors
- **Primary Actor:** Field Service Technician (via Mobile App)
- **Secondary Actors:** Passive Inventory Sync Engine

## 2. Preconditions
- An unmanaged Fiber Access Terminal (FAT) is bolted to a pole in the field, carrying a proprietary vendor QR code sticker.

## 3. Trigger
The technician scans the QR code and commits its GPS bounds to the inventory module.

## 4. Main Success Scenario (Basic Flow)
1. The sync engine instantiates a new `passive-device` assigned the identity `FAT`.
2. The engine injects the proprietary QR hash into the `custom-tags` leaf-list natively without breaking standards.
3. The engine creates an `ietf-ni-location` cartesian coordinate metric for the pole.
4. The FAT node injects a `location-ref` binding its unmanaged physical presence strictly to the geo-spatial location model defined in Epic 3.

## 5. Alternate and Exception Flows
- **5a. Missing Geographical Module:**
  1. The `ietf-ni-location` dependencies are unmounted.
  2. The schema orchestrator rejects the `location-ref` compilation.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The completely "dumb" passive hardware unit is localized and uniquely searchable via enterprise tracking markers within the pure standard namespace.

## 7. Operational Context
> Customized tags, e.g. RFID, QR code that are attached to the device. Referenced location for the passive device utilizing `nil:ni-location-ref`.

## 8. Realization Matrix
### Required User Stories
- [ ] #90 [US-24: Passive to Active Hardware Cross-Referencing]
### Required Features
- [ ] #84 [Feature: Passive Device Inventory]

## Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
