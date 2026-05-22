---
title: "Feature: Network Address Data Types"
epic: "Epic 2: Common YANG Data Types (ietf-yang-types)"
type: "feature"
labels: ["feature", "ietf-yang-types"]
---

# Feature: Network Address Data Types

## 1. Semantic Grouping Context
This feature encapsulates the raw byte-string representations of physical hardware network identifiers (like MAC addresses).

## 2. Exhaustive Leaf Constraints

### Type: `phys-address`
- **Base Type:** `string`
- **Pattern:** `'([0-9a-fA-F]{2}(:[0-9a-fA-F]{2})*)?'`
- **Verbatim RFC Context:**
  > Represents media- or physical-level addresses represented as a sequence of octets, each octet represented by two hexadecimal numbers. Octets are separated by colons. The canonical representation uses lowercase characters.

### Type: `mac-address`
- **Base Type:** `string`
- **Pattern:** `'[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}'`
- **Verbatim RFC Context:**
  > The mac-address type represents a 48-bit IEEE 802 Media Access Control (MAC) address. The canonical representation uses lowercase characters.

## 3. Acceptance Criteria
**Given** an incoming address metric
**When** the format is parsed
**Then** `mac-address` MUST be strictly validated as exactly 6 colon-separated hexadecimal pairs.
**And** `phys-address` MUST allow variable length arrays of colon-separated hexadecimal pairs.

## 4. Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
