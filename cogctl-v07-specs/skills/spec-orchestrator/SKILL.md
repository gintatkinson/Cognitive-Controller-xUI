---
title: "Autonomous Specification Orchestrator (Master Command)"
description: "Master command-and-control skill for end-to-end multi-agent protocol reverse-engineering."
category: "orchestration"
---

# Autonomous Specification Orchestrator (Master Command)

This skill enables you to act as the **Master Orchestrator Agent**. You are responsible for executing an end-to-end "Digital Engineering Pipeline" that fully reverse-engineers a protocol standard (e.g., IETF, 3GPP, IEEE, CAMARA) into a deterministic GitHub repository matrix using UML OOA/OOD methodologies.

You will accomplish this by coordinating the sequential execution of three specialized Worker skills.

## Pre-Flight Checklist
Before beginning orchestration, verify you have:
1. The target specification identifier (e.g., RFC 8345, 3GPP TS 23.501).
2. The path(s) to the associated structural schemas (e.g., `*.yang`, `*.yaml`, `*.proto`).

## Phase 1: Structural Extraction (Worker A)
1. **Trigger**: Initialize the execution of the `schema-specification-engineering` skill.
2. **Context**: Pass the path to the target structural schema files.
3. **Execution**: Allow the worker logic to computationally extract EVERY structural element in the schema without abbreviation.
4. **Validation Gate**: You MUST wait for the Phase 1 execution to fully complete. The agent must successfully create all Feature issues FIRST, capture their IDs, inject them into the Epic markdown, and then create the Epic issue. Query GitHub (`gh issue list --state "open"`) to verify the new Epics and Features exist and are properly interlinked. Do not proceed to Phase 2 until the structural foundation is verified.

## Phase 2: Behavioral Extraction - User Stories (Worker B)
1. **Trigger**: Initialize the execution of the `spec-user-story-engineering` skill.
2. **Context**: Pass the text/path of the target specification document.
3. **Execution**: Allow the worker logic to parse the operational scenarios, extract the OOA/OOD User Stories, and query the GitHub repository to build the Cross-Cutting Matrix linking to the Phase 1 features.
4. **Validation Gate**: Verify that the `user-story` issues have been created in GitHub and that their tasklists successfully render the intersecting `#IssueID`s generated during Phase 1.

## Phase 3: System Interaction Extraction - UML Use Cases (Worker C)
1. **Trigger**: Initialize the execution of the `spec-usecase-engineering` skill.
2. **Context**: Pass the text/path of the target specification document.
3. **Execution**: Allow the worker logic to extract formal UML System Use Cases (Actors, Preconditions, Flow, Postconditions) and map them down to the User Stories from Phase 2 and Features from Phase 1.
4. **Validation Gate**: Verify that the `use-case` issues have been created in GitHub and that the Realization Matrix successfully links back to User Stories and Features.

## Phase 4: Final Reporting
1. Summarize the end-to-end pipeline execution for the user.
2. Provide direct links to the generated Epics, Features, User Stories, and Use Case tracking matrices.
3. Declare the protocol module "Fully Instrumentally Reverse-Engineered."
