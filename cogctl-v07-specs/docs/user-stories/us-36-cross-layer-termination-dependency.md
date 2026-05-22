---
title: "US-36: Cross-Layer Termination Dependency"
type: "user-story"
spec_source: "rfc8345"
---

# User Story: Cross-Layer Termination Dependency

## Domain Object Mapping
- **Primary Domain Objects:** `supporting-termination-point`, `network-ref`, `node-ref`, `tp-ref`
- **Actor/Role:** Multi-Layer Dependency Tracker

## BDD Scenario (OOA/OOD Realization)
**Given** a logical upper-layer termination endpoint
**When** mapping it downwards to its physical chassis hardware port
**Then** the configuration MUST leverage the `supporting-termination-point` list.
**And** the datastore MUST utilize a 3-part coordinate system enforcing `network-ref`, `node-ref`, and `tp-ref`.
**And** the `network-ref` and `node-ref` MUST validate against the node's inherited `supporting-node` constraints.

## Operational Context
> This list identifies any termination points on which a given termination point depends or onto which it maps. Those termination points will themselves be contained in a supporting node.

## Required Features Matrix
- [ ] #118 [Feature: Underlay Topological Support Mapping]

## Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
