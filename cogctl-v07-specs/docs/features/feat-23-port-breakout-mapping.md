---
title: "Feature: Port Breakout and Termination Mapping"
epic: "Epic 5: Network Inventory Topology (ietf-network-inventory-topology)"
type: "feature"
labels: ["feature", "ietf-network-inventory-topology"]
---

# Feature: Port Breakout and Termination Mapping

## 1. Semantic Grouping Context
This feature logically maps the Termination Points (TPs) in the logical overlay topology down to their physical port components, whilst defining the read-only breakout channel configurations available on that physical hardware.

## 2. Exhaustive Leaf Constraints

### Augmentation: `/nw:networks/nw:network/nw:node/nt:termination-point`
- **When**: `../../nw:network-types/nwit:inventory-topology`
- **inventory-mapping-attributes**: `container`
  - **Uses**: `nwi:port-ref` (1:1 mapping between logical TP and physical port component)
- **port-breakout**: `container` (presence, `config false`)
  - **breakout-channel**: `list`
    - **Key**: `channel-id` (`uint16`)

## 3. Acceptance Criteria
**Given** a logical termination point operating at 400G
**When** the mapping attributes are evaluated
**Then** the node MUST enforce a 1:1 mapping directly to a verified inventory port via `port-ref`.
**And** the `port-breakout` container MUST enforce a strict operational `config false` status for the mapped hardware channels.

## 4. Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
