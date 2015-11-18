---
layout: default
title:  "Roadmap"
menu_title: "Roadmap"
lang: en
categories: en
---

This page contains the development roadmap for the Open Procurement toolkit. The existing software is being continuously improved, this list of modules and features will give you an insight into its progress.

####RECENTLY COMPLETED

##Scaling
* Separate servers to host CDB and auctions.
* Horizontal scaling and load distribution across CDB servers.
* Backup server with copies of system data.

##Log server
* Online logs using syslog protocol, JSON.
* Logs from CDB, auctions, eMalls, CDB sandbox.
* Logs archivation for audit needs.

[Read more detailed specifications](http://openprocurement.org/en/log-server.html)

##Non-price criteria
* Opportunity to choose the most economically advantageous proposal - not only by price but also by additional non-price criteria.
* Check that the sum of all non-price criteria of one tender does not exceed 30%.

[Read more detailed specifications](http://openprocurement.org/en/nonprice-criteria.html)

####COMING SOON

##Test Stand with Automated Acceptance Test Suite 
* Jenkins-based Continuous Integration system for eMalls (commercial electronic procurement platforms) testing. 
* Checking the current state of every eMall (implementation level of different features) and functionality regression if one occurs.

[Read more detailed specifications](http://openprocurement.org/en/test-stand.html) 

##Multi-lot tender
* Opportunity to divide the procurement procedure into parts - lots.
* Automatic uniformity verification of the procurement subject for all lots and all nomenclatures of the tender.
* Compatibility with lot-less procedures (for eMalls that do not support multi-lot tenders).

[Read more detailed specifications](http://openprocurement.org/en/multilots.html)

##Complaints
* To implement the complaint mechanism for the below-threshold tenders via Complaint Review body at Transparency International Ukraine or another independent public organization that can make recommendations for Procuring entities.
* To implement the complaint mechanism for the above-threshold tenders according to the articles 18 and 23 of the law on Public procurement.

[Read more detailed specifications](http://openprocurement.org/en/complaints.html)

####PLANNED

##Dynamic Purchasing System
* Applied for commonly used purchases the characteristics of which, as generally available on the market, meet their requirements.
* Set up and manage end-to-end dynamic purchasing systems which can be divided into categories of works, services and goods. 

##New Features
* Integration with Tender Electronic Daily (TED).

####FUTURE

##Public Procurement Portal
* Discoverability via search engines, permalinks, notification subscription, data visualization. 
* Search criteria and filtering (based on Economic Operator, range of dates, CPV code, etc.).
* Data in several different open formats (OCDS, CSV, SPARQL, XML, etc.).

[Read more detailed specifications](http://openprocurement.org/en/public-procurement-portal)

##Operation mechanism via “version window”
* Smoother transition from the older API version to the newer one. 
* eMalls do not need to synchronize the transition time, each eMall can upgrade separately.
* CDB can be accessed via both older and newer versions.

##e-Contracting module
* Maintaining and retrieving up-to-date information regarding contracts.
* e-Invoicing.
* Registering and tracking of contract and its changes.
* Tracking of the contract implementation stages.
* Contract closure.

##e-Planning 
* Collecting and displaying data about public procurement plans of all Economic Operators.

##Document Management
* Registering, filing, archiving and logging activity on the decrypted human readable version of the tender bundle.
* Long-term preservations of documents in digitised format, ensuring that they can be easily retrieved without conversions.

##Business Intelligence module
* Extract all necessary data to perform procurement statistical analysis from CDB.
* Statistical analysis of procurement data plays a significant role in the strategy definition for future procurement expenditures and serves as a strategic tool for the whole electronic procurement lifecycle.

##Business Certification/Prequalification Management
* Economic Operators can prequalify and certify contractors.
* Manage, maintain and retrieve up-to-date information on vendors.
* Automatic renewal notifications.

##RFP Evaluation
* Assign evaluators, set evaluation criteria, build scoring measures.
* Check technical qualifications prior to proposal evaluation.
* Receive comprehensive reports and charts.

