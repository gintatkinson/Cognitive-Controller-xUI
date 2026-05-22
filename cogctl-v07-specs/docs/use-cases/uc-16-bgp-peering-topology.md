---
title: "UC-16: BGP Peering and Topology Construction"
type: "use-case"
spec_source: "rfc6021"
---

# Use Case: BGP Peering and Topology Construction

## 1. Actors
- **Primary Actor:** BGP Topology Orchestrator
- **Secondary Actors:** Traffic Engineering Database

## 2. Preconditions
- A new core BGP router is deployed across a service provider backbone requiring an AS configuration.

## 3. Trigger
The orchestrator attempts to bind the router to the wide-area network utilizing a massive 32-bit AS number.

## 4. Main Success Scenario (Basic Flow)
1. The orchestrator pushes the target BGP endpoint configuration, defining the far-end neighbor via a `host` type containing a `domain-name`.
2. It assigns the local `as-number` as `4200000000`.
3. The datastore parses the `host` type, falls back from `ip-address` formatting to `domain-name` regex formatting, and accepts the DNS string.
4. The datastore parses the `as-number`, verifies it safely fits within the `uint32` boundary, and provisions the BGP instance.

## 5. Alternate and Exception Flows
- **5a. DNS Name Length Overflow:**
  1. The orchestrator supplies a `host` domain name exceeding 253 characters.
  2. The datastore rejects the configuration based on the `1..253` length enforcement.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** BGP topologies remain fully resilient against integer overflow limitations on modern 32-bit AS structures.

## 7. Operational Context
> Autonomous system numbers were originally limited to 16 bits. BGP extensions have enlarged the autonomous system number space to 32 bits. This type therefore uses an uint32 base type.

## 8. Realization Matrix
### Required User Stories
- [ ] #110 [US-30: Autonomous System Number Scalability]
- [ ] #112 [US-32: Host Resolution and URI Normalization]
### Required Features
- [ ] #105 [Feature: Autonomous System Data Types]
- [ ] #107 [Feature: Domain Name and URI Data Types]

## Source References
YANG Schema: [ietf-inet-types@2010-09-24.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-inet-types%402010-09-24.yang)
Normative Specification: [RFC 6021](https://datatracker.ietf.org/doc/rfc6021/)
