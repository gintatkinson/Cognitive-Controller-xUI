---
title: "US-32: Host Resolution and URI Normalization"
type: "user-story"
spec_source: "rfc6021"
---

# User Story: Host Resolution and URI Normalization

## Domain Object Mapping
- **Primary Domain Objects:** `host`, `domain-name`, `uri`
- **Actor/Role:** Service Discovery Engine

## BDD Scenario (OOA/OOD Realization)
**Given** a network endpoint identifier string
**When** parsing a `host` union type
**Then** the datastore MUST attempt to validate it as an `ip-address` first, and if failed, validate it against the `domain-name` DNS constraints (bound to a max string `length` of 253).
**And** if validating a `uri`, the datastore MUST assume US-ASCII normalized constraints, ignoring case sensitivity for hexadecimal sequences as per RFC 3986.

## Operational Context
> The host type represents either an IP address or a DNS domain name. The domain-name type represents a DNS domain name... The encoding of DNS names in the DNS protocol is limited to 255 characters... only 253 characters can appear in the textual dotted notation.

## Required Features Matrix
- [ ] #107 [Feature: Domain Name and URI Data Types]

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
