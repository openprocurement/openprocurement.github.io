---
layout: default
title:  "FAQ"
menu_title: "FAQ"
lang: en
categories: en
---

### Can this solution be used for public procurements?

Yes. The OpenProcurement toolkit was designed specifically for the procurement of goods and services on behalf of public authorities. Public procurements have specific requirements as to the accessibility and transparency of procedures. This solution enforces (where appropriate) and encourages recognised best practices for public procurements during the whole tendering process. The Open Procurement toolkit uses electronic documents, strict qualification requirements, a transparent system of proposal evaluation and awarding, effective reverse auctions and open access to the procurement data.

### Can I use OpenProcurement for commercial solutions?

Yes. The OpenProcurement software can be used for the development of private sector procurement processes, from one-off procurements to enterprise-scale systems. Parts of the OpenProcurement toolkit (e.g. Central database or Auction module) can be used together or separately for any commercial projects.

### Which license does this software use?

The OpenProcurement toolkit is distributed under the Apache license for free and open source software.

### Has this toolkit been applied anywhere?

The Open Procurement toolkit is currently used by Ukrainian public procurement project Prozorro. The main aim of Prozorro is to provide transparent and efficient spending of public funds and to prevent corruption through public control and bigger number of suppliers. Competition between eMalls will lead to the procurement service improvement. Six e-Malls are already providing access to the system. What is more important, the project is open, so any eMall can join if it provides the necessary functionality. Among the procuring entities that use Prozorro are Ministry of Infrastructure, Ministry of Defence, Ministry of Justice, Ministry of Economy, State Management of Affairs, Ministry of Ecology, and many others. This solution received positive feedback from users. 

### What is an eMall?

eMall is a web platform that implements e-Procurement system features and provides access for procuring entities, suppliers and regular visitors.

### Why do you use a reverse auction?

The OpenProcurement toolkit uses reverse auction because it is time and cost effective. In a reverse auction suppliers compete to sell goods to the procuring entity at the lowest price. This mechanism significantly reduces the cost of the product/service and allows buyer to compare prices, qualifications, and other factors at a glance.

### How does the auction work?

An auction starts automatically on the pre-announced date and time. Nobody knows the exact number of participants and their bid proposals. All users, including the procuring entity, can monitor the progress of the auction online. The auction page displays bidders (anonymously), their previously registered bids, and the time before the start of the auction and/or bidder’s turn. Via their eMalls bidders receive individual URLs of the auction page where they can review key auction information and place their bids.

After the start of the auction the system pauses for 5 minutes so that participants can get acquainted with bids of anonymous competitors. Once the 5 minute period ends the system automatically announces the first round.

The auction consists of three rounds with identical rules. Each round provides 2 minutes for participant to lower their previous bid. If the participant made bid earlier, system will give him the opportunity to make changes before the end of the allotted time. If the participant was inactive for 2 minutes, system will accept his bid and pass the turn to the next participant. When all participants make their bids, system pauses for 2 minutes and announces the next round.

After the third round the system ranks all submitted bids automatically by price, forming ratings of bidders positions. This information is published as soon as the electronic reverse auction finishes. Then users can get complete information about bid proposals and participants who submitted them.

### How many rounds does the auction have?

The reverse auction consists of three rounds. Each participant has 2 minutes to change (or keep) offered bid and there is a 2-minute pause between the rounds.

### When are suppliers’ qualifications checked?

It depends on the tender procedure. In most cases the qualification stage is performed after the auction is finished. The procurement entity or an assigned committee reviews commercial and qualification parts of the bid and has a right to request a candidate’s qualification documents that were not mandatory at the time of the bid registration. In some other cases, like Open European procedure, bid proposals are qualified before the auction.

### What programming language does the Open Procurement toolkit use?

The business logic of this toolkit is implemented in Python. This high-level programming language ensures maximum productivity, top quality, and user-friendly maintainability. A combination of other software tools like Pyramid, Angular.js, Bootstrap, Flask, CouchDB, and PouchDB help to deliver a powerful back-end solution.

### Which database is used in the Open Procurement toolkit?

The Central Database uses non-relational database CouchDB to store records of auctions, bids, etc.

### Does the database store information about users, such as their logins/passwords?

The Central Database does not store any authorization data about registered users. The Central Database stores all documents, data, and other information related to the organization and conduction of procurement. Authorization data allows for identification of a bidder or person challenging the validity of a procurement. The eMall/operator is responsible for protection against unauthorized access and accidental destruction and/or distortion of account data contained in the system. 

### If my eMall is written in X programming language, can it work with this toolkit?

The Open Procurement toolkit was designed with the flexibility in mind. Regardless the programming language or any other technology specifications of an eMall, the eMall can seamlessly interoperate with the Central Database via an API. The API is part of the toolkit so that eMall can provide suppliers with temporary credentials to access the Auction module for participation in the auction.

### Where can I host the Central Database and the Auction module?

These parts of the toolkit can be hosted using cloud service like Amazon. One of the requirements is S3-compatible document repository, for example, Apache Swift.

### Are there any restrictions of database size or amount of procurements?

The toolkit was developed to avoid imposing restrictions on the size of database and/or number of conducted procurements.

### Can I search through the ProZorro database?

The database search is not implemented yet, but it is planned to be a part of the toolkit functionality.


# For eMalls

### Does eMall need its own database?

Yes, eMalll (broker) should develop a database according to the data model described in the [API documentation](http://api-docs.openprocurement.org/en/latest). Minimum requirement is a mechanism for tender and bid access tokens storage. Access tokens are received from CDB at the moment of object creation (e.g. [tender creation](http://api-docs.openprocurement.org/en/latest/tutorial.html#creating-tender)). CDB does not provide any data search mechanism (see [discussion](https://groups.google.com/d/topic/open-procurement-api/LkWSc4cGrqc/discussion)), so eMalls have their own database copy and use synchronization mechanism.

### How does synchronization mechanism work?

Each eMall has its own database copy and uses synchronization mechanism to synchronize data with CDB. There are two relatively independent components:

* synchronizer that synchronizes all changes occurring in CDB with the eMall’s database, including the activation reaction to events (users notifications, etc.). Details can be found [here](http://api-docs.openprocurement.org/en/latest/tenders.html#synchronizing). 

* mechanism that registers actions of users in CDB. There are two approaches:

   * simultaneous: when user makes an action this action is made in CDB and user waits for the confirmation of success/failure of the action;
   * asynchronous: when user actions create queue and change synchronizer sends them to CDB, user is notified of the results by a separate mechanism.

To know more about the peculiarities of synchronization with productive (cluster) basis with separated reading and writing points, read the following threads:
[https://groups.google.com/d/topic/open-procurement-api/XjurUed0r8Q/discussion](https://groups.google.com/d/topic/open-procurement-api/XjurUed0r8Q/discussion) 
[https://groups.google.com/d/topic/open-procurement-api/JjB5F5lvO14/discussion](https://groups.google.com/d/topic/open-procurement-api/JjB5F5lvO14/discussion)

### How can user of eMall A access tender which was announced on eMall B?

User does not need to register on another eMall. All events needed during tender conduction should be provided by "native" eMall. All changes that occur at the eMall are sent to the CDB and via synchronization become known to other eMalls. Data synchronization time between eMalls is less than 10 minutes. When supplier on one eMall asks question, it goes to the CDB via eMall and from CDB it "spreads" to all other platforms. Procuring entity provides answer on their eMall, this answer goes to the CDB and from the CDB it "spreads" to all platforms. 

### What is an API key?

API key is required for operations that are not available for anonymous user, such as creating and editing of tenders, submission of bid proposals, secret links for auction participation, etc. There is no need to use API key for data synchronization between the CDB and eMall. Details on how to use API key and access tokens are available at [API documentation](http://api-docs.openprocurement.org/en/latest/authentication.html).

### How should you begin testing your own eMall?

To develop testing driver for your own eMall you should build a test environment on your computer acccording to the instructions [here](https://github.com/openprocurement/robot_tests/wiki). Transitional drivers (or final versions) should be kept at github (each eMall has its own driver), see [https://github.com/openprocurement/?utf8=✓&query=robot_tests.broker](https://github.com/openprocurement/?utf8=✓&query=robot_tests.broker). Driver that is available on github is used for testing at the central testing server: [http: //testing.openprocurement.org](http: //testing.openprocurement.org/). Subscribe to the [discussion](https://groups.google.com/group/open-procurement-testing), where you can learn more information.

