---
title: "Feature: Object Identifier Data Types"
epic: "Epic 2: Common YANG Data Types (ietf-yang-types)"
type: "feature"
labels: ["feature", "ietf-yang-types"]
---

# Feature: Object Identifier Data Types

## 1. Semantic Grouping Context
This feature logically encapsulates the object-identifier types used for administratively assigned names in a registration-hierarchical-name tree.

## 2. Exhaustive Leaf Constraints

### Type: `object-identifier`
- **Base Type:** `string`
- **Pattern:** `'(([0-1](\.[1-3]?[0-9]))|(2\.(0|([1-9][0-9]*))))(\.(0|([1-9][0-9]*)))*'`
- **Verbatim RFC Context:**
  > Values of this type are denoted as a sequence of numerical non-negative sub-identifier values. Each sub-identifier value MUST NOT exceed 2^32-1. Sub-identifiers are separated by single dots and without any intermediate whitespace.

### Type: `object-identifier-128`
- **Base Type:** `object-identifier`
- **Pattern:** `'[0-9]*(\.[0-9]*){1,127}'`
- **Verbatim RFC Context:**
  > This type represents object-identifiers restricted to 128 sub-identifiers.

## 3. Acceptance Criteria
**Given** an object identifier schema node
**When** validating the incoming string
**Then** the node MUST enforce the specific regex patterns enforcing correct first-sub-identifier boundaries (0, 1, or 2).
**And** the `object-identifier-128` variant MUST strictly cap the hierarchy to 128 subsets.

## 4. Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
