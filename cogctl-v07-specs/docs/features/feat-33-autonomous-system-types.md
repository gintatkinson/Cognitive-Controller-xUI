---
title: "Feature: Autonomous System Data Types"
epic: "epic-08-inet-types"
type: "feature"
labels: ["feature", "ietf-inet-types"]
---

# Feature: Autonomous System Data Types

## Acceptance Criteria
**Given** the need to model BGP Autonomous Systems
**When** assigning a network identifier
**Then** the schema MUST define `as-number` as a `uint32` data type without range restrictions.
**And** the implementation MUST mathematically support both legacy 16-bit and extended 32-bit AS numbers seamlessly.

## Specification Context (Verbatim)
> collection of autonomous system related types
> The as-number type represents autonomous system numbers which identify an Autonomous System (AS).
> Autonomous system numbers were originally limited to 16 bits. BGP extensions have enlarged the autonomous system number space to 32 bits. This type therefore uses an uint32 base type without a range restriction in order to support a larger autonomous system number space.

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
