---
title: "Feature: Protocol Field Data Types"
epic: "epic-08-inet-types"
type: "feature"
labels: ["feature", "ietf-inet-types"]
---

# Feature: Protocol Field Data Types

## Acceptance Criteria
**Given** the need to model Internet Protocol packet metadata
**When** defining routing, QoS, or transport fields
**Then** the schema MUST define `ip-version` as an enumeration of `unknown (0)`, `ipv4 (1)`, and `ipv6 (2)`.
**And** it MUST restrict `dscp` strictly to an 8-bit unsigned integer with the range `0..63`.
**And** it MUST restrict `ipv6-flow-label` strictly to a 32-bit unsigned integer with the range `0..1048575`.
**And** it MUST restrict `port-number` strictly to a 16-bit unsigned integer with the range `0..65535`.

## Specification Context (Verbatim)
> collection of protocol field related types
> The dscp type represents a Differentiated Services Code-Point that may be used for marking packets in a traffic stream.
> The flow-label type represents flow identifier or Flow Label in an IPv6 packet header that may be used to discriminate traffic flows.
> The port-number type represents a 16-bit port number of an Internet transport layer protocol such as UDP, TCP, DCCP, or SCTP.

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
