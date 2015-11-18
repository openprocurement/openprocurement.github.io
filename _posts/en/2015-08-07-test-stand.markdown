---
layout: default
title:  "Test Stand with Automated Acceptance Test Suite"
menu_title: "Test Stand"
lang: en
categories: en
exclude_from_nav: 'yes'
---

### 1. General information

ProZorro project is to be extended with Test Stand with Automated Acceptance Test Suite. It will cover running tests, exploring test run details (including historical records), publishing the results. Acceptance test suite will become an unbiased criteria for new procurement platform readiness evaluation. 

Test Stand is expected to provide self-service means for project stakeholders to enable adding new test configurations as needs arise.

Test cases documentation, instructions and implementation recommendations are to be included with Test Stand for use by existing, prospective and future purchasing platforms.

### 2. Statement of objective

Primary short term objective is having Test Stand with ability to evaluate new purchasing platforms with unbiased Automated Acceptance Test Suite.

The secondary objective is ability to continue using Test Stand with Automated Acceptance Test Suite by stakeholders to ensure compliance during operations and further project development. This is expected to increase the project velocity for all stakeholders. 

### 3. Automated Acceptance Testing

Create testcases, instructions and implementation recommendations for purchasing platforms to enable automated Acceptance Testing. These automated testing will cover Anonymous User, Procuring Entity, Provider and Complaint Review Body roles.

The procurement platform that will be connected to ProZorro Central Database has to prove its compliance by implementing relevant part of Acceptance testsuite and passing the tests run.

Ability to test new versions of the purchasing platform code (candidate) before deployment to production will enable bug detection before they hit final users.

Ability to test new version of Central Database API codebase will provide confidence in its compatibility with existing and planned procurement platform codebase.

All these factors will shorten development iterations for Central Database and for purchasing  platforms.
Continuous re-testing on connected purchasing platforms should enable fast regression detection and allow faster bug fixing turnaround.

Testsuite can be extended with tests that probe recommended and optional aspects to unify and highlight the set of standard and unique features that are implemented by purchasing platforms.