---
title: "US-33: Point-to-Point Link Instantiation"
type: "user-story"
spec_source: "rfc8345"
---

# User Story: Point-to-Point Link Instantiation

## Domain Object Mapping
- **Primary Domain Objects:** `link`, `source-node`, `dest-node`
- **Actor/Role:** Topology Orchestrator

## BDD Scenario (OOA/OOD Realization)
**Given** the need to connect two abstract networking nodes
**When** the orchestrator provisions a `link` object
**Then** the datastore MUST mandate the definition of `source-node` and `dest-node`.
**And** it MUST strictly validate via leafref constraints that the supplied node-ids natively exist in the same parent topology instance.
**And** it MUST exclusively enforce point-to-point architecture rather than multipoint link structures.

## Operational Context
> A network link connects a local (source) node and a remote (destination) node via a set of the respective node's termination points... Note that a link models a point-to-point link, not a multipoint link.

## Required Features Matrix
- [ ] #115 [Feature: Network Link Architecture]
- [ ] #116 [Feature: Link Termination Endpoints]

## Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
