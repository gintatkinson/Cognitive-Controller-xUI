---
title: "UC-15: Network Interface Configuration Validation"
type: "use-case"
spec_source: "rfc6021"
---

# Use Case: Network Interface Configuration Validation

## 1. Actors
- **Primary Actor:** Network Provisioning Controller
- **Secondary Actors:** Device NETCONF Server

## 2. Preconditions
- The controller intends to configure an IP address on a newly spun-up Layer 3 interface.

## 3. Trigger
The controller sends an `<edit-config>` RPC payload containing an `ipv4-address` string.

## 4. Main Success Scenario (Basic Flow)
1. The NETCONF server receives the IP string.
2. The server compares the string against the `ipv4-address` POSIX `pattern` definition.
3. The string correctly matches the `X.X.X.X` dotted-quad mathematical bounds.
4. The server commits the interface configuration.

## 5. Alternate and Exception Flows
- **5a. Invalid Subnet Regex Match:**
  1. The controller accidentally includes a prefix slash `/24` in an `ipv4-address` leaf (which explicitly lacks prefix slash support).
  2. The datastore immediately rejects the payload with an invalid-value schema exception, ensuring bad states cannot propagate down to the interface hardware.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** Configuration is perfectly normalized and impossible to inject with malformed text fields.

## 7. Operational Context
> The ipv4-address type represents an IPv4 address in dotted-quad notation.

## 8. Realization Matrix
### Required User Stories
- [ ] #109 [US-29: IP Version and Protocol Field Validation]
- [ ] #111 [US-31: IPv4 and IPv6 Textual Pattern Enforcement]
### Required Features
- [ ] #104 [Feature: Protocol Field Data Types]
- [ ] #106 [Feature: IP Address and Prefix Data Types]

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
