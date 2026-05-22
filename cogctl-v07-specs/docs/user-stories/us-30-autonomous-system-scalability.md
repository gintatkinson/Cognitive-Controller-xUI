---
title: "US-30: Autonomous System Number Scalability"
type: "user-story"
spec_source: "rfc6021"
---

# User Story: Autonomous System Number Scalability

## Domain Object Mapping
- **Primary Domain Objects:** `as-number`
- **Actor/Role:** BGP Routing Engine

## BDD Scenario (OOA/OOD Realization)
**Given** a BGP routing topology
**When** assigning a unique autonomous system identifier to the routing domain
**Then** the framework MUST ingest the identifier into a `uint32` memory boundary, supporting large-scale modern BGP networks extending beyond the legacy 16-bit capacity.

## Operational Context
> BGP extensions have enlarged the autonomous system number space to 32 bits. This type therefore uses an uint32 base type without a range restriction in order to support a larger autonomous system number space.

## Required Features Matrix
- [ ] #105 [Feature: Autonomous System Data Types]

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
