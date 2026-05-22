---
title: "US-08: MAC and Physical Address Canonicalization"
type: "user-story"
spec_source: "RFC 9911"
---

# User Story: MAC and Physical Address Canonicalization

## Domain Object Mapping
- **Primary Domain Objects:** `mac-address`, `phys-address`
- **Actor/Role:** Networking Interface

## BDD Scenario (OOA/OOD Realization)
**Given** a raw hardware networking address string
**When** the string is decoded
**Then** the interface MUST format all alphabetical hexadecimal characters in lowercase.
**And** it MUST separate octets by exactly one colon (`:`).
**And** `mac-address` MUST be strictly locked to 6 pairs (48-bit).

## Operational Context
> Represents media- or physical-level addresses represented as a sequence of octets, each octet represented by two hexadecimal numbers. Octets are separated by colons. The canonical representation uses lowercase characters.

## Required Features Matrix
- [ ] #39 [Feature: Network Address Data Types]

## Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
