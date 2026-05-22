---
title: "US-31: IPv4 and IPv6 Textual Pattern Enforcement"
type: "user-story"
spec_source: "rfc6021"
---

# User Story: IPv4 and IPv6 Textual Pattern Enforcement

## Domain Object Mapping
- **Primary Domain Objects:** `ipv4-address`, `ipv6-address`, `ipv4-prefix`, `ipv6-prefix`
- **Actor/Role:** Layer 3 Interface Configuration Parser

## BDD Scenario (OOA/OOD Realization)
**Given** a raw string input representing an IP address or subnet prefix
**When** the datastore evaluates the structure for validity
**Then** it MUST apply complex regex `pattern` evaluations enforcing the dotted-quad structures for IPv4 and the multi-colon hex structures for IPv6.
**And** it MUST successfully parse optional zone indexes denoted by the `%` symbol.
**And** it MUST enforce prefix slashes strictly bound to `0..32` for IPv4 and `0..128` for IPv6.

## Operational Context
> The ipv4-address type represents an IPv4 address in dotted-quad notation. The IPv4 address may include a zone index, separated by a % sign. The ipv6-address type represents an IPv6 address in full, mixed, shortened, and shortened-mixed notation.

## Required Features Matrix
- [ ] #106 [Feature: IP Address and Prefix Data Types]

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
