---
title: "US-18: Physical Link Media Classification"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-topology"
---

# User Story: Physical Link Media Classification

## Domain Object Mapping
- **Primary Domain Objects:** `link-type`, `unknown`, `leased-fiber`
- **Actor/Role:** Physical Discovery Agent

## BDD Scenario (OOA/OOD Realization)
**Given** a discovered physical link traversing two hardware nodes
**When** the topology agent maps the link into the network-inventory-topology model
**Then** the agent MUST map the edge connection strictly against the `link-type` base identities (copper, fiber, microwave, etc.).
**And** if the physical media cannot be determined definitively, the agent MUST fallback securely to the `unknown` identity reference.

## Operational Context
> Classification of the link media type at the topology layer. This leaf serves as a lightweight discriminator. When the value is 'microwave', detailed microwave link attributes are defined in the microwave topology data model. Wired media may be detailed in a passive network inventory model.

## Required Features Matrix
- [ ] #73 [Feature: Link Physical Media Types]

## Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
