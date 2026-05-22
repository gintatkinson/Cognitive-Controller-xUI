---
title: "US-34: Node Termination Interface Mapping"
type: "user-story"
spec_source: "rfc8345"
---

# User Story: Node Termination Interface Mapping

## Domain Object Mapping
- **Primary Domain Objects:** `termination-point`, `tp-id`
- **Actor/Role:** Interface Management Daemon

## BDD Scenario (OOA/OOD Realization)
**Given** an abstract router or switch node defined in the topology
**When** the node establishes ports or logical interfaces
**Then** the schema MUST construct a `termination-point` element natively appended to the node configuration.
**And** each port MUST declare a universally unique `tp-id` defined strictly by an `inet:uri`.

## Operational Context
> A termination point can terminate a link. Depending on the type of topology, a termination point could, for example, refer to a port or an interface.

## Required Features Matrix
- [ ] #117 [Feature: Node Termination Points]

## Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
