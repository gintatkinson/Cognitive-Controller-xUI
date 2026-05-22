---
title: "Feature: Network Link Architecture"
epic: "epic-09-network-topology"
type: "feature"
labels: ["feature", "ietf-network-topology"]
---

# Feature: Network Link Architecture

## 1. Semantic Grouping Context
This feature defines the structural top-level augmentation that injects `link` elements into the base `network` topology. It provides the required definitions to model point-to-point connections across an abstract topology.

## 2. Exhaustive Leaf Constraints

### Top-Level Augmentation: `augment "/nw:networks/nw:network"`
- **list link**: `key "link-id"`
  - **link-id**: `type link-id` (which is `inet:uri`)

## 3. Acceptance Criteria
**Given** a network topology map
**When** the topology defines connectivity
**Then** the schema MUST allow a `link` list augmented directly under the base `network` container.
**And** each `link` MUST be uniquely identified by a `link-id` resolving to an `inet:uri` string.
**And** the link definition MUST model exclusively point-to-point topologies.

## 4. Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
