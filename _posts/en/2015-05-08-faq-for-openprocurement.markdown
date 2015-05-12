---
layout: default
title:  "FAQ"
menu_title: "FAQ"
lang: en
categories: en
---

###Can this solution be used for public procurements?

The Open Procurement toolkit was designed specifically for the procurement of goods and services on behalf of public authorities. Public procurement has specific requirements to the accessibility and transparency of procedures. This solution enforces (where appropriate) and encourages recognised best practices during the whole tendering process. The Open Procurement toolkit uses electronic documents, strict qualification requirements, transparent system of proposals evaluation and awarding, effective reverse auction and open access to the procurement data.

###Can I use OpenProcurement for commercial solutions?

Yes, free OpenProcurement software can be used for development of custom commercial solution and even its sale. Parts of the OpenProcurement toolkit (e.g. Central database or Auction module) can be used together or separately for any commercial projects.

###Which license using this software?

The OpenProcurement toolkit is distributed under the Apache license for free and open source software.

###Has this toolkit been applied anywhere?

The Open Procurement toolkit is currently used by Ukrainian public procurement project Prozorro. The main aim of Prozorro is to provide transparent and efficient spending of public funds and to prevent corruption through public control and bigger number of suppliers. Competition between eMalls will lead to the procurement service improvement. Six e-Malls are already providing access to the system. What is more important, the project is open, so any eMall can join if it provides the necessary functionality. Among the procuring entities that use Prozorro are Ministry of Infrastructure, Ministry of Defence, Ministry of Justice, Ministry of Economy, State Management of Affairs, Ministry of Ecology, and many others. This solution received positive feedback from users. 

###What is an eMall?

eMall is a web platform that implements e-Procurement system features and provides access for procuring entities, suppliers and regular visitors.

###Why the reverse auction?

The Open Procurement toolkit uses reverse type of auctions because it is time and cost efficient. The peculiarity of the reverse auction is that participants lower their bids with each round. Basically, suppliers compete to sell goods to the procuring entity at the lowest price. This mechanism significantly reduces the cost of product/service and allows buyer to compare prices, qualifications, and other factors at a glance.
The main benefits of reverse auction are:

 * the buyer is the primary beneficiary; 
 * reduction of purchasing costs; 
 * increased efficiency in the market; 
 * enhancement of the procurement process.

###How does the auction work?

Auction starts automatically on the pre-announced date and time. Nobody knows the exact number of participants and their bid proposals. All users, including procuring entity, can monitor the progress of the auction online. The auction page displays bidders (anonymously), their previously registered bids, and time before the start of the auction and/or bidder’s turn. Via eMall bidders receive individual URLs with the auction page. There, apart from the aforementioned information, there is field where they can make their bids.

After the start of the auction system pauses for 5 minutes so that participants can get acquainted with bids of anonymous competitors. Once the 5 minutes period ends the system automatically announces the first round.

Auction consists of three rounds with identical rules. In each round during 2 minutes each bidder (in order from the higher initial bid to the lower one, or from later bid proposals to earlier ones, if they coincide) can lower their previous bid. If the participant made bid earlier, system will give him the opportunity to make changes before the end of the allotted time. If the participant was inactive for 2 minutes, system will accept his bid and pass the turn to the next participant. When all participants make their bids, system pauses for 2 minutes and announces the next round.

After the third round system ranks all submitted bids automatically by price, forming ratings of bidders positions. This information is published as soon as the electronic reverse auction finishes. Then users can get complete information about bid proposals and participants who submitted them.

###How many rounds does the auction have?

The reverse auction consists of three rounds. Each participant has 2 minutes to change (or keep) offered bid and there is a 2-minute pause between the rounds.

###When the suppliers’ qualification is performed?

The qualification stage is performed after the auction is finished. The procurement entity or an assigned committee reviews commercial and qualification parts of the bid and has a right to request a candidate’s qualification documents that were not mandatory at the time of the bid registration.

###What programming language does the Open Procurement toolkit use?

The business logic of this toolkit is implemented in Python. This high-level programming language ensures maximum productivity, top quality, and user-friendly maintainability. A combination of other software tools like Pyramid, Angular.js, Bootstrap, Flask, CouchDB, and PouchDB helped to deliver a powerful solution.

###Which database is used in the Open Procurement toolkit?

The Central Database uses non-relational database CouchDB to store records of auctions, bids, etc.

###Does the database store information about users, such as their logins/passwords?

The Central Database does not store any authorization data about registered users. The Central Database stores all documents, data, and other information related to the organization and conduction of procurement. Authorization data is an identificational data of system users that allows them to participate in the procurement processes or their appeal, so it is very important to keep it secret. The eMall/operator is responsible for protection against unauthorized access and accidental destruction and/or distortion of account data contained in the system. 

###If my eMall is written in X programming language, can it work with this toolkit?

The Open Procurement toolkit was designed with the flexibility in mind. Regardless the programming language or any other technology specifications any eMall can seamlessly interoperate with the Central Database via an API. The API is part of the toolkit so that eMall can provide suppliers with temporary credentials to access the Auction module for participation in the auction.

###Where can I host the Central Database and the Auction module?

These parts of the toolkit can be hosted using cloud service like Amazon. One of the requirements is S3-compatible document repository, for example, Apache Swift.

###Are there any restrictions of database size or amount of procurements?

The toolkit was developed to avoid imposing restrictions on the size of database and/or number of conducted procurements.

###Can I search through the database?

The database search is not implemented yet, but it is planned to be a part of the toolkit functionality.
