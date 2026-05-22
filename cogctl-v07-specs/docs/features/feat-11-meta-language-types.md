---
title: "Feature: Meta-Language Data Types"
epic: "Epic 2: Common YANG Data Types (ietf-yang-types)"
type: "feature"
labels: ["feature", "ietf-yang-types"]
---

# Feature: Meta-Language Data Types

## 1. Semantic Grouping Context
This feature encapsulates data types that exist to reference or enforce rules within the schema hierarchy itself (e.g., xpath selection or yang element identification).

## 2. Exhaustive Leaf Constraints

### Type: `xpath1.0`
- **Base Type:** `string`
- **Verbatim RFC Context:**
  > This type represents an XPATH 1.0 expression. When a schema node is defined that uses this type, the description of the schema node MUST specify the XPath context in which the XPath expression is evaluated.

### Type: `yang-identifier`
- **Base Type:** `string`
- **Length:** `1..max`
- **Pattern:** `'[a-zA-Z_][a-zA-Z0-9\-_.]*'`
- **Verbatim RFC Context:**
  > A YANG identifier string as defined by the 'identifier' rule in Section 14 of RFC 7950. An identifier must start with an alphabetic character or an underscore followed by an arbitrary sequence of alphabetic or numeric characters, underscores, hyphens, or dots.

## 3. Acceptance Criteria
**Given** a meta-schema value
**When** compiling or executing the schema logic
**Then** `yang-identifier` MUST strictly enforce the starting alphabetic/underscore character constraint.
**And** `xpath1.0` strings MUST be provided an evaluation context.

## 4. Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
