---
title: "US-05: Wrapping Counter Bounds Enforcement"
type: "user-story"
spec_source: "RFC 9911"
---

# User Story: Wrapping Counter Bounds Enforcement

## Domain Object Mapping
- **Primary Domain Objects:** `counter32`, `counter64`
- **Actor/Role:** Validation System

## BDD Scenario (OOA/OOD Realization)
**Given** an active counter metric (32-bit or 64-bit)
**When** the monotonically increasing value surpasses its absolute max boundary
**Then** the validation system MUST transparently wrap the value back to 0 without throwing an overflow exception.

## Operational Context
> The counter32/64 type represents a non-negative integer that monotonically increases until it reaches a maximum value of 2^32-1 (or 2^64-1), when it wraps around and starts increasing again from zero.

## Required Features Matrix
- [ ] #36 [Feature: Counter and Gauge Data Types]

## Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
