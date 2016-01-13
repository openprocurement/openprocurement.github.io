---
layout: default
title:  "Non-price criteria"
menu_title: "Non-price criteria"
lang: en
categories: en
exclude_from_nav: 'yes'
---

##Aim

Opportunity to choose the most economically advantageous proposal - not only by price but also by additional non-price criteria.

##Legal framework

[Law on the Public procurement (in Ukrainian)](https://docs.google.com/document/d/1wxHLMOohlCXC14yamFqc_o4f3mJnWC4eXwDZ6F3GaPI/edit?usp=sharing)

##Terms

**Correction coefficient** -- coefficient according to which the Normalized price is calculated. It is used to average the quality features of proposals made by different suppliers.

**Normalized price** -- calculated weights equivalent.  

**Proposal price** -- the price offered by the supplier. This price will be used in the contract signed with the winner of the procedure.

##Brief process overview

While creating Tender announcement the Procuring entity defines one or more non-price criteria to determine the total weight and logic of evaluation. The total weight of all non-price criteria of one proposal must not exceed 30%.

While submitting proposal Participant registers non-price parameters of his proposal. According to them proposal’s “correction coefficient” is automatically calculated. Using this coefficient the so-called "Normalized price" (the term from the Law)  is determined.

Participants take part in the reverse auction using “Normalized price”. The auction determines the tender winner. The Procuring entity and the winner sign a contract worth the normalized price multiplied by the "correction coefficient."

##Detailed process overview

###Tender announcement by the Procuring entity

During the tender creation via eMall interface the Procuring entity defines one or more non-price criteria in addition to the standard fields:

* the number of parameters - unlimited;
* minimum and maximum parameter value.

The total weight of these criteria must not exceed 30% (Law norm).

The procuring entity defines specific values for each criterion (if the list of such parameters is fixed) or ranges of values, each of which gets its individual weight.

Each criterion can be applied to either participant’s price proposal in general, or to a specific procurement item.

Form for a non-price criterion creation can look the following way:

![Form for tender with non-price criteria](/images/nonprcri/en_nonprice_criteria_tender.png)

Non-price criteria, their possible values and weight ​​are displayed in the tender announcement. Thus, in this example, participants know that in order to get the maximum score for the "Payment terms" criterion they have to offer deferred payment for at least 180 days, etc. They determine their capabilities basing on this criterion. Also, participants who submit deferred payment terms 90 days and 179 days will receive the same option weight. 

###Proposal submission

Participant submits his proposal including its non-price criteria from the list of values ​​created by the Procuring entity. “Correction coefficient" applied to this proposal and normalized price are automatically calculated during the proposal submission.

![Non-price criteria](/images/nonprcri/en_nonprice_criteria_form.png)

![Formula for correction coefficient](/images/nonprcri/ua_nonprice_criteria_formula.png)

* K - participant’s correction coefficient
* M - number of non-price criteria, specified by the Procuring entity
* Vn- importance (weight in percents) of the parameter selected by the participant
* Vnmax- maximum value of each of the non-price criteria specified by the Procuring entity

The fields specified by the participant in the proposal submission form should be consistent with the information in the attached files. That is, in the text of the supplier’s commercial proposal in this example payment period must be between 90-179 days and quality should be high. In case of divergence this could lead to disqualification.

###Auction

Auction starts according to the standard procedure, the Procuring entity does no prior proposal evaluation. 
Bidder’s auction page changes - there is a new additional field “normalized price”. The participant can enter either full price or normalized price. Calculation of the second one will be done automatically based on the correction coefficient that was received by the participant after the proposal submission.

![Auction with non-price criteria](/images/nonprcri/en_nonprice_criteria_auction.png)

After the auction completion, participants’ names, their correction coefficients and full prices are published for each auction round and its results.

##CDB Requirements

Check that the sum of all non-price criteria of one tender does not exceed 30%.

##eMall Requirements

Check that the sum of all non-price criteria of one tender does not exceed 30%.
