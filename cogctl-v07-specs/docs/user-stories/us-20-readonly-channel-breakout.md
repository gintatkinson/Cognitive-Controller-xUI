---
title: "US-20: Read-Only Channel Breakout Exposure"
type: "user-story"
spec_source: "draft-ietf-ivy-network-inventory-topology"
---

# User Story: Read-Only Channel Breakout Exposure

## Domain Object Mapping
- **Primary Domain Objects:** `termination-point/port-breakout`, `breakout-channel`
- **Actor/Role:** Optical Provisioning Engine

## BDD Scenario (OOA/OOD Realization)
**Given** a topological termination point mapped to a high-capacity physical port (e.g., 400G optic)
**When** the optical provisioning engine queries available channels
**Then** the node MUST expose the `port-breakout` structure as strictly `config false`.
**And** it MUST list all independent channel IDs available for sub-interface partitioning.

## Operational Context
> Breakout capability of the physical port represented by this TP. One TP maps to one physical port; channels are listed here. This container is present only when the underlying hardware supports partitioning the port into multiple independent channels.

## Required Features Matrix
- [ ] #74 [Feature: Port Breakout and Termination Mapping]

## Source References
YANG Schema: [ietf-network-inventory-topology.yang](https://raw.githubusercontent.com/ietf-ivy-wg/network-inventory-topology/main/yang/ietf-network-inventory-topology.yang)
Normative Specification: [draft-ietf-ivy-network-inventory-topology](https://datatracker.ietf.org/doc/html/draft-ietf-ivy-network-inventory-topology)
