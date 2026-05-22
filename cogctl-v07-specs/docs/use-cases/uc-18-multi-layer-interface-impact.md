---
title: "UC-18: Multi-Layer Interface Impact Analysis"
type: "use-case"
spec_source: "rfc8345"
---

# Use Case: Multi-Layer Interface Impact Analysis

## 1. Actors
- **Primary Actor:** Network Fault Correlation Engine
- **Secondary Actors:** Telemetry Ingest Pipeline

## 2. Preconditions
- The network features a Layer 3 routing topology built atop a physical optical transport topology.

## 3. Trigger
A catastrophic fiber severing cuts a physical optical transport link, dropping the physical `termination-point` interfaces.

## 4. Main Success Scenario (Basic Flow)
1. The datastore processes the physical layer deletion of the `link`.
2. The fault engine traverses vertically upwards into the overlay networks.
3. It scans for any logical overlay `link` referencing the destroyed physical link via the dual-key `supporting-link` constraints.
4. It identifies the exact logical L3 paths dependent on the destroyed link.
5. The traffic engineering SDN orchestrator is signaled to dynamically bypass those logical links.

## 5. Alternate and Exception Flows
- **5a. Circular Reference Prevention:**
  1. An operator mistakenly attempts to configure a `supporting-link` that recursively points back onto itself.
  2. The datastore intercepts the loop ("Reference loops in which a link identifies itself as its underlay, either directly or transitively, are not allowed") and blocks the commit.

## 6. Postconditions (Guarantees)
- **Success Guarantee:** The blast radius of a physical layer fault is mathematically projected upwards to the logical layer instantaneously.

## 7. Operational Context
> Identifies the link or links on which this link depends. This leaf identifies in which underlay topology the supporting link is present.

## 8. Realization Matrix
### Required User Stories
- [ ] #122 [US-35: Cross-Layer Link Dependency Verification]
- [ ] #123 [US-36: Cross-Layer Termination Dependency]
### Required Features
- [ ] #118 [Feature: Underlay Topological Support Mapping]

## Source References
YANG Schema: [ietf-network-topology@2018-02-26.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-network-topology%402018-02-26.yang)
Normative Specification: [RFC 8345](https://datatracker.ietf.org/doc/rfc8345/)
