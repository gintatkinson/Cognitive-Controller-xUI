---
title: "US-35: Cross-Layer Link Dependency Verification"
type: "user-story"
spec_source: "rfc8345"
---

# User Story: Cross-Layer Link Dependency Verification

## Domain Object Mapping
- **Primary Domain Objects:** `supporting-link`, `network-ref`, `link-ref`
- **Actor/Role:** Multi-Layer Dependency Tracker

## BDD Scenario (OOA/OOD Realization)
**Given** a logical upper-layer tunnel overlay link
**When** the datastore binds this tunnel to a physical underlay connection
**Then** the configuration MUST populate the `supporting-link` array.
**And** the `network-ref` key MUST mathematically validate against the `supporting-network` array configured in the parent network schema.
**And** the `link-ref` key MUST mathematically validate that the exact link ID exists physically in the targeted underlay.

## Operational Context
> Identifies the link or links on which this link depends. This leaf identifies in which underlay topology the supporting link is present... Reference loops in which a link identifies itself as its underlay, either directly or transitively, are not allowed.

## Required Features Matrix
- [ ] #118 [Feature: Underlay Topological Support Mapping]

## Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
