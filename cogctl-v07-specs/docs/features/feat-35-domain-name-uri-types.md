---
title: "Feature: Domain Name and URI Data Types"
epic: "epic-08-inet-types"
type: "feature"
labels: ["feature", "ietf-inet-types"]
---

# Feature: Domain Name and URI Data Types

## Acceptance Criteria
**Given** the need to reference network resources by human-readable names or universal locators
**When** assigning a host or service endpoint
**Then** the schema MUST define `domain-name` as a string with a `pattern` validating DNS rules and a rigorous string `length` boundary of `1..253` characters.
**And** it MUST define `host` as a union resolving first as an `ip-address` and falling back to a `domain-name`.
**And** it MUST define `uri` as a US-ASCII normalized Uniform Resource Identifier without percent-encoding capitalization discrepancies.

## Specification Context (Verbatim)
> collection of domain name and URI types
> The domain-name type represents a DNS domain name. The name SHOULD be fully qualified whenever possible. The encoding of DNS names in the DNS protocol is limited to 255 characters. Since the encoding consists of labels prefixed by a length bytes and there is a trailing NULL byte, only 253 characters can appear in the textual dotted notation.
> The host type represents either an IP address or a DNS domain name.
> The uri type represents a Uniform Resource Identifier (URI) as defined by STD 66. Objects using the uri type MUST be in US-ASCII encoding, and MUST be normalized as described by RFC 3986.

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
