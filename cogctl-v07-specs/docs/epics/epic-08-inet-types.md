---
title: "Epic 8: Common INET Data Types (ietf-inet-types)"
type: "epic"
labels: ["epic", "ietf-inet-types"]
---

# Epic: Common INET Data Types

## 1. Context
This epic encapsulates the structural foundation of the `ietf-inet-types` YANG module as defined in RFC 6021. It acts as the Internet Protocol counterpart to the core `ietf-yang-types` module, supplying the industry-standard data types for IP addresses, prefixes, AS numbers, URIs, domain names, and protocol fields used by every IETF networking module.

## 2. Structural Features
The following features mathematically define the schema constraints grouped by their semantic domain:

- [ ] #104 - [Feature: Protocol Field Data Types](../features/feat-32-protocol-field-types.md)
- [ ] #105 - [Feature: Autonomous System Data Types](../features/feat-33-autonomous-system-types.md)
- [ ] #106 - [Feature: IP Address and Prefix Data Types](../features/feat-34-ip-address-prefix-types.md)
- [ ] #107 - [Feature: Domain Name and URI Data Types](../features/feat-35-domain-name-uri-types.md)

## 3. Specification Context
> This module contains a collection of generally useful derived YANG data types for Internet addresses and related things. This version of this YANG module is part of RFC 6021.

## 4. Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
