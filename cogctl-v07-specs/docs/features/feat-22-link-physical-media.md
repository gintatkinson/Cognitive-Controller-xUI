---
title: "Feature: Link Physical Media Types"
epic: "Epic 5: Network Inventory Topology (ietf-network-inventory-topology)"
type: "feature"
labels: ["feature", "ietf-network-inventory-topology"]
---

# Feature: Link Physical Media Types

## 1. Semantic Grouping Context
This feature logically groups the base identities used to categorize the physical transmission media of the underlay links, bridging the logical topological edges to physical reality.

## 2. Exhaustive Leaf Constraints

### Identities: `link-type`
- **base**: `link-type`
- **derived identities**: `copper`, `fiber`, `coax`, `microwave`, `wlan`, `unknown`
- **leased-fiber**: Derived from `fiber`

### Augmentation: `/nw:networks/nw:network/nt:link`
- **When**: `../nw:network-types/nwit:inventory-topology`
- **inventory-mapping-attributes**: `container`
  - **link-type**: `identityref` (base `link-type`)

## 3. Acceptance Criteria
**Given** an initialized inventory mapping module
**When** a topology link is validated
**Then** the node MUST evaluate the `link-type` identityref securely against the predefined media list.
**And** it MUST support fallback states utilizing the `unknown` derived identity.

## 4. Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
