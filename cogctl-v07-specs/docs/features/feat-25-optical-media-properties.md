---
title: "Feature: Optical Media Properties"
epic: "Epic 6: Passive Network Inventory (ietf-nwi-passive-inventory)"
type: "feature"
labels: ["feature", "ietf-nwi-passive-inventory"]
---

# Feature: Optical Media Properties

## 1. Semantic Grouping Context
This feature encapsulates the specific physical and mathematical constraints bound uniquely to fiber-optic passive cables, including ITU-T standardization constraints and light attenuation metrics.

## 2. Exhaustive Leaf Constraints

### Grouping: `optical-cable-attributes`
- **container optical-cable**:
  - **When**: `derived-from-or-self(../cable-type, 'optical-fiber')`
  - **fiber-core-num**: `uint32` (Total strands in the cable)
  - **fiber-type**: `identityref` (Base `fiber-type` e.g., G652D, G655, G657A1)
  - **attenuation**: `decimal64`
    - **fraction-digits**: 2
    - **units**: `dB`

## 3. Acceptance Criteria
**Given** a physical cable defined as an optical-fiber
**When** the optical attributes are parsed
**Then** the node MUST enforce the ITU-T standard identities for the `fiber-type` leaf.
**And** the signal degradation `attenuation` MUST mathematically validate as a decimal64 fraction with exactly 2 digits representing decibels.

## 4. Source References
YANG Schema: [ietf-nwi-passive-inventory.yang](https://raw.githubusercontent.com/YangModels/yang/main/experimental/ietf-extracted-YANG-modules/ietf-nwi-passive-inventory%402025-07-07.yang)
Normative Specification: [draft-ygb-ivy-passive-network-inventory](https://datatracker.ietf.org/doc/draft-ygb-ivy-passive-network-inventory/)
