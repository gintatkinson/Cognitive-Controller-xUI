---
title: "Feature: Logical Node to Physical NE Mapping"
epic: "Epic 5: Network Inventory Topology (ietf-network-inventory-topology)"
type: "feature"
labels: ["feature", "ietf-network-inventory-topology"]
---

# Feature: Logical Node to Physical NE Mapping

## 1. Semantic Grouping Context
This feature encapsulates the logical-to-physical binding that correlates a topological graph node directly to its instantiated Network Element inside the base inventory.

## 2. Exhaustive Leaf Constraints

### Augmentation: `/nw:networks/nw:network/nw:node`
- **When**: `../nw:network-types/nwit:inventory-topology`
- **inventory-mapping-attributes**: `container`
  - **ne-ref**: `nwi:ne-ref` (Leafref pointing to `/nwi:network-inventory/nwi:network-elements/nwi:network-element/nwi:ne-id`)

## 3. Acceptance Criteria
**Given** a logical network graph node
**When** the mapping container is evaluated
**Then** the node MUST strictly enforce the `when` condition requiring the `inventory-topology` flag.
**And** the `ne-ref` must securely map a 1:1 relationship to an existing physical chassis ID.

## 4. Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
