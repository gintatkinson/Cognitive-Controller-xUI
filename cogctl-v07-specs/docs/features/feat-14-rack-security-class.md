---
title: "Feature: Rack Security Classification"
epic: "Epic 3: Network Inventory Location (ietf-ni-location)"
type: "feature"
labels: ["feature", "ietf-ni-location"]
---

# Feature: Rack Security Classification

## 1. Semantic Grouping Context
This feature encapsulates the cryptographic-style `identity` structures used to standardize rack physical security classifications across the inventory.

## 2. Exhaustive Leaf Constraints

### Base Identity: `rack-class-type`
- **Description**: Base identity for generic rack classification based on physical security characteristics. Designed for regional extension.

### Derived Identities
- `rack-standard`: Standard general-purpose rack without physical locking mechanisms.
- `rack-secure-baseline`: Baseline secure lockable rack.
- `rack-secure-medium`: Medium security lockable rack.
- `rack-secure-high`: High security lockable rack.

## 3. Acceptance Criteria
**Given** an instantiated equipment rack definition
**When** a security classification is assigned
**Then** the node MUST enforce that the classification is inherited precisely from `rack-class-type`.
**And** any custom extensions MUST extend this base identity.

## 4. Source References
YANG Schema: [ietf-ni-location.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-location/main/ietf-ni-location.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-location](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-location)
