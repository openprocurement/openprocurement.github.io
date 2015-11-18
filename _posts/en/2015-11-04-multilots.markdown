---
layout: default
title:  "Tender with multiple lots"
menu_title: "Multi-lot tender"
lang: en
categories: en
exclude_from_nav: 'yes'
---

##Aim:

* To provide the Procuring entity with a convenient way to divide the procurement procedure into parts in order to increase competition by attracting small and medium size businesses.
* For the Procuring entity: To reduce the number of bureaucratic procedures that accompany open tendering (individual decisions and cumbersome session protocols of the Committee on competitive bidding, etc.).
* For the participants: To reduce the number of downloads of documents confirming compliance with the qualification criteria.
* To simplify management of the questions and answers related to the whole procedure and not to an individual lot.
* To reduce the likelihood of participants collusion that divide lots among bidders without real competition based on price. To simplify the detection of such collusions.



##Legal framework

* [Law on the Public procurement (in Ukrainian)](https://docs.google.com/document/d/1lBK5Y5bYPm2OmFhlfE3OuTX6H6KAfRj9fzEkNkzy8-8)
* [Decree of the Ministry of economic development and trade of Ukraine №921 “On approval of the order definition of the procurement subject” (in Ukrainian)](http://zakon2.rada.gov.ua/laws/show/z0623-10)

##Brief process overview

The Procuring entity announces procedure divided into lots. Participant submits qualification documents once for the entire procedure. If individual lots require individual documents, participant separately uploads qualification documents for the procedure and for the lots. The auction is held not for the procedure as a whole, but for each lot separately. To reduce the risk of price collusion, the results of all auctions are opened simultaneously after the completion of all auctions of the procedure.

The structure of the documents is organized as following:

![Document structure of Multi-lot tender](/images/multilots/en_multilots.png)

##Detailed process overview

###Procedure announcement

The Procuring entity announces a procedure by determining the following elements at the nomenclature level (item):

* SC (the State Products and Services Classifier) Code
* CPV code
* Procurement subject description
* Qualification requirements and requirements to the procurement subject 
* Planned procurement price
* Number of procurements
* Units of measurement
* Key procedure dates 

After that, the Procuring entity divides the procedure into lots. For each lot the Procuring entity defines the following fields:

* Lot description 
* Expected price

Verifications:

* the first five characters of the lot’s SC code must match the SC code of the whole procedure.
* the first three characters of the lot’s CPV classifier code must match the CPV code of the whole procedure.

The estimated value of the procedure is calculated as the sum of the expected value of the lots.

###Proposal submission

Bidder uploads documents confirming qualification and compliance with the procurement subject once for all procedure. If individual lots require individual documents, participant separately uploads qualification documents for the procedure and for the lots.

###Auction

Tender status transfers into "Auction" when the auction starts for at least one lot.

The auction is held separately for each lot. Data about the bidders and submitted proposals is published 
as soon as the last auction of the tender is completed.

###Qualification

Tender transfers into a "Qualification"status as soon as the last auction of the tender is completed.

Qualification is conducted according to the standard procedure for each individual lot separately.

##eMall requirements:

* The Procuring entity can choose multi-lot procedure and create an unlimited number of lots.
* The Procuring entity can change the lot structure, add new lot and remove existing ones - before the end of the clarification period.
* The Procuring entity can specify the qualification requirements for the whole procedure (general) and for each lot separately (specific for lot).
* The Supplier can submit documents (attachments) for the whole procedure and for each lot separately, according to the tender requirements.
* Automatic uniformity verification of the procurement subject for all lots and all nomenclatures of the tender.
* The capability to submit questions for the whole procedure or for individual lots.
* Adaptation to all API changes, defined in the requirements for CDB.

##Auction requirements

* Auction re-configuration (forming auction URL page, auction planning module) from Tender object to Lot object. 
* Auction planner modification to take lots into account. 
* Auction results storage in the auction database without publication before the last auction of the tender is completed.
* Auction results storage in the auction database in the audit.yml file without publication before the last auction of the tender is completed. 
* Change of the auction screen forms.


##CDB requirements (changes)

* Additional object (lot).
* API (POST) that allows recording and editing the tender in CDB.
* Data validation taking multiple lots into account.
* API (GET) that returns a list of tenders with lots.
* Change of the nomenclature (item) dependance from tender to lot.
* API (POST, PATCH) that allows submitting a proposal with division of data elements and documents (attachment) into those which are related to all lots of the procedure and those which are related to an individual lot.
* Award object re-configuration from tender to lot.
* Reordering the awarding process from tender to lots.
* API (POST, PATCH) contracts re-configuration so that users can upload a separate contract for each lot or one contract for several lots.
* Change of document (attachment) linking from tender to lot.
* API (POST, PATCH) questions readjustment so that users can submit questions both for the tender as a whole and for individual lots.
* Calculated fields (such as calculation of the expected value of the tender as the sum value of all lots).
* Modification of the access point between the auction and CDB, including data synchronization.
* Auction results storage in CDB without publication before the last auction of the tender is completed. 
* Tender transfer to "Qualification" only after the last auction of the tender is completed. 
* Tender transfer to "Completed" status only after procurement procedure ends for all lots.
* Automatic uniformity verification of the procurement subject for all lots and all nomenclatures of the tender.
* Integration with quality parameters that can vary for each lot.
* Compatibility with lot-less procedures (for eMalls that do not support multi-lot tenders):
  * automatic lot generation for lot-less tender (for eMalls that do not support multi-lot tenders);
  * capability to manually enter values for the fields ​​that are calculated automatically for the multi-lot procedures.
