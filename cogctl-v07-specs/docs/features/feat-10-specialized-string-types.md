---
title: "Feature: Specialized String Data Types"
epic: "Epic 2: Common YANG Data Types (ietf-yang-types)"
type: "feature"
labels: ["feature", "ietf-yang-types"]
---

# Feature: Specialized String Data Types

## 1. Semantic Grouping Context
This feature logically encapsulates various textual encoding boundaries used for identifiers, hex blobs, and locale mapping.

## 2. Exhaustive Leaf Constraints

### Type: `hex-string`
- **Base Type:** `string`
- **Pattern:** `'([0-9a-fA-F]{2}(:[0-9a-fA-F]{2})*)?'`

### Type: `uuid`
- **Base Type:** `string`
- **Pattern:** `'[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}'`
- **Verbatim RFC Context:**
  > A Universally Unique IDentifier in the string representation defined in RFC 9562. The canonical representation uses lowercase characters.

### Type: `dotted-quad`
- **Base Type:** `string`
- **Pattern:** `'(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])'`
- **Verbatim RFC Context:**
  > An unsigned 32-bit number expressed in the dotted-quad notation, i.e., four octets written as decimal numbers and separated with the '.' (full stop) character.

### Type: `language-tag`
- **Base Type:** `string`
- **Verbatim RFC Context:**
  > A language tag according to RFC 5646 (BCP 47). The canonical representation uses lowercase characters.

## 3. Acceptance Criteria
**Given** a specialized string parameter
**When** the data is validated
**Then** `dotted-quad` MUST enforce a maximum of 255 for each octet segment.
**And** `uuid` MUST enforce exact hyphen positioning and hexadecimal bounds.

## 4. Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
