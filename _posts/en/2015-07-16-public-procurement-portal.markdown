---
layout: default
title:  "Software Requirements Specifications for development of Public Procurement Portal"
menu_title: "Specifications for Public Portal"
lang: en
categories: en
exclude_from_nav: 'yes'
---

###1. GENERAL INFORMATION

The Prozorro Project was launched in January 2015. Its goal was providing an accessible reverse auction solution to be used on voluntary basis and thus reduce corruption in public procurement in Ukraine. 

Software toolkit used in this project is an open source solution with repositories hosted at [https://github.com/openprocurement](https://github.com/openprocurement). This toolkit contains database (that stores detailed procurement information) and functional modules, e.g. e-Auction, e-Qualification, e-Evaluation, e-Awarding, etc. Currently the only way to extract data from the database is via an API, so it is important to create other extraction mechanism. Specifically, a centralized place for the publication of all procurement-related data accessible for ordinary internet users.

Public Procurement Portal (further - Portal) is a public portal that provides access to the public procurement database. The Portal should become the medium through which all Ukrainian public procurement information is accessed, found, and viewed. 

The primary goal of the portal is to be able to see the spending of governmental institutions: what they spend on, who does the projects and receives the money, what kind of procurement process was used, and so on. It serves as a strategic tool for the whole electronic procurement lifecycle helping at identifying inconsistencies, suspicious manipulations, opportunities for improvement and cost reductions, etc.

The Portal will become an important information source for the picture of the public procurement in Ukraine. Access to an extensive database will promote collection, analysis and synthesis of data with a different level of detail and regularity. 


**Expected portal users** are:

* Journalists: discoverability via Google and other search engines, fulltext search, notification subscription using Atom.
* Data journalists: filter building capabilities, data download, visualization.
* Researchers: data download and analysis.
* Ordinary citizens: discoverability via Google and other search engines, permalinks, social media integration.
* Developers:  mashup development based on open data.

###2. OBJECTIVES AND EXPECTED RESULTS

The overall objectives of this project are to:

* collect, display and offer for extraction as much information on procurement procedures as possible;
* maintain certain level of data quality and consistency;
* provide procurement data search and visualization.

####System users

The Portal will give wide access to the public procurement data to:

* Ordinary users. They must be able to use intuitive and user-friendly web interface, access comprehensive and easy-to-find information, have access to searches and filters.
* Researchers. They must be able to monitor and analyze public procurement procedures on the state and regional level. They must be provided with machine-readable data in an easily digestible form and tools to extract large amounts of data and information regarding procurement. They will be able to prepare statistics and report any suspicious cases on the basis of their analysis.
* Automated systems. The Portal must provide complete database interaction mechanism via specific protocols.

###3. SOFTWARE SPECIFICATIONS

This portal must host up-to-date and comprehensive information concerning public procurement – procurement procedure details, documents and contracts, CPV Classifier, etc. as well as quick and easy access to commercial electronic procurement platforms involved. 

####Portal requirements

* The Portal must collect data from several different sources and harmonize it so that data can be processed and displayed in one format. 
  * Minimum goal: data would be collected from two source databases - Prozorro and «Zovnishtorgvydav Ukrainy». 
  * Maximum goal: data would be also collected from the State Treasury Service of Ukraine and Ministry of Economy that publishes public procurement plans.
* Data must be easily exhaustive, accessible, and published in several different open formats (OCDS, CSV, SPARQL, XML, etc.).
* The Portal must provide interactive and detailed information about the tenders each organization announced/took part in and allow to keep track of tenders of individual particular organizations. 
* The Portal must ensure integration with all commercial electronic procurement platforms and provide links to their corresponding tender pages.
* The Portal must provide users with visualization tools that will allow building charts based on search/request results (using SPARQL). Charts can be static and dynamic, they could be shared via social media platforms or embedded into webpages. 
* Users must be able to search published procurement data and download the corresponding contract notices, tender documents or other relevant information.
* Search capabilities available:
  * Various search criteria meeting the needs and interests of the users: ID, title, status, Economic Operator, range of dates (e.g. the date of submission of the business document), CPV, etc. 
  * Minimum goal: full-text search across structured part of the machine-readable data. 
  * Maximum goal: digitization and recognition of all attached documents, full-text search across recognized data.
* Scalability. The system must be designed to meet significantly large transactional load and ensure stable work for large number of visitors. 
* The Portal must be wholly open source, provide links to documents and sources, and allow collaborative development and implementation of additional features.

