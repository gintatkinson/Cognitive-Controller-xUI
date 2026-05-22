---
title: "Feature: IP Address and Prefix Data Types"
epic: "epic-08-inet-types"
type: "feature"
labels: ["feature", "ietf-inet-types"]
---

# Feature: IP Address and Prefix Data Types

## Acceptance Criteria
**Given** a network endpoint configuration
**When** defining a layer 3 address
**Then** the schema MUST support an `ip-address` union type combining both IPv4 and IPv6 constraints.
**And** `ipv4-address` MUST be validated by strict string `pattern` matching enforcing the `X.X.X.X` dotted-quad boundary with optional `%zone` indexing.
**And** `ipv6-address` MUST be validated by extremely complex `pattern` matching supporting full, mixed, shortened, and shortened-mixed notation with optional `%zone` indexing.
**And** prefix forms (`ip-prefix`, `ipv4-prefix`, `ipv6-prefix`) MUST append rigorous CIDR block validation lengths (less than or equal to 32 for IPv4, 128 for IPv6) directly to the patterns.

## Specification Context (Verbatim)
> collection of IP address and hostname related types
> The ip-address type represents an IP address and is IP version neutral.
> The canonical format of IPv6 addresses uses the compressed format described in RFC 4291, Section 2.2, item 2 with the following additional rules: the :: substitution must be applied to the longest sequence of all-zero 16-bit chunks in an IPv6 address.
> The ip-prefix type represents an IP prefix and is IP version neutral. The format of the textual representations implies the IP version.

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
