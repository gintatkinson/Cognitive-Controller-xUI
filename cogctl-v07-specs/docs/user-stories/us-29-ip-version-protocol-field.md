---
title: "US-29: IP Version and Protocol Field Validation"
type: "user-story"
spec_source: "rfc6021"
---

# User Story: IP Version and Protocol Field Validation

## Domain Object Mapping
- **Primary Domain Objects:** `ip-version`, `dscp`, `ipv6-flow-label`, `port-number`
- **Actor/Role:** Transport Layer Configuration Daemon

## BDD Scenario (OOA/OOD Realization)
**Given** a configuration provisioning an Internet transport layer protocol
**When** the configuration defines port numbers, flow labels, or differentiated services code-points
**Then** the YANG datastore MUST reject any `port-number` exceeding 65535 or falling below 0.
**And** it MUST reject any `dscp` values outside the 0..63 bounds.
**And** it MUST restrict the `ip-version` enumeration to `unknown (0)`, `ipv4 (1)`, or `ipv6 (2)`.

## Operational Context
> The port-number type represents a 16-bit port number of an Internet transport layer protocol such as UDP, TCP, DCCP, or SCTP. Port numbers are assigned by IANA.

## Required Features Matrix
- [ ] #104 [Feature: Protocol Field Data Types]

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
