---
title: "Epic 2: Common YANG Data Types (ietf-yang-types)"
type: "epic"
labels: ["epic", "ietf-yang-types"]
---

# Epic: Common YANG Data Types

## 1. Context
This epic encapsulates the structural foundation of the `ietf-yang-types` YANG module as defined in RFC 9911. It provides over 30 fundamental, universally applicable `typedef` objects used repeatedly by downstream YANG models.

## 2. Structural Features
The following features mathematically define the schema constraints grouped by their semantic domain:

- [ ] #36 - [Feature: Counter and Gauge Data Types](../features/feat-06-counter-gauge-types.md)
- [ ] #37 - [Feature: Object Identifier Data Types](../features/feat-07-object-identifier-types.md)
- [ ] #38 - [Feature: Date, Time, and Temporal Data Types](../features/feat-08-temporal-data-types.md)
- [ ] #39 - [Feature: Network Address Data Types](../features/feat-09-network-address-types.md)
- [ ] #40 - [Feature: Specialized String Data Types](../features/feat-10-specialized-string-types.md)
- [ ] #41 - [Feature: Meta-Language Data Types](../features/feat-11-meta-language-types.md)

## 3. Specification Context
> This document defines a collection of common data types to be used with the YANG data modeling language. It includes several new type definitions and obsoletes RFC 6991.

## 4. Source References
YANG Schema: [ietf-yang-types@2025-12-22.yang](https://raw.githubusercontent.com/YangModels/yang/main/standard/ietf/RFC/ietf-yang-types%402025-12-22.yang)
Normative Specification: [RFC 9911 Common YANG Data Types](https://datatracker.ietf.org/doc/rfc9911/)
