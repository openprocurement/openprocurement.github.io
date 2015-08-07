---
layout: default
title:  "Log Server"
menu_title: "Log Server"
lang: en
categories: en
---

### Aim

1. To ensure transparency of the Central DB, platforms, Auction module, Administrator, other modules and system actors by publishing system log files.
2. To enable self-service of platforms that are already connected or will be connected to the system by tracking logs that are generated during processing of their requests until the integration of Central DB logs with platforms’ log servers while providing complete tracking of the chain of events using ID correlation.
3. To archive logs for auditing purposes.

### Log delivery format

* Online logs using syslog protocol, JSON.
* Logs in text and JSON formats will be periodically uploaded to Amazon S3.

### Modules that are tracked using logs:

* Central DB
* Auctions
* Purchasing platforms
* Central DB sandbox
* capability to add logs from other subsystems.

### Types of logs

**Public log** - excludes the following types of information:

* that identifies the platform that conducts transaction;
* that can identify tender for which the price offer was posted in the system.

**Detailed auction log** - is published after the end of the auction.

**Log about purchasing platform request results**. Central DB logs all requests from purchasing platform. Log messages are collected and sent to the platform to provide data on request processing. Only purchasing platform has access to its own request logs.

**Administrative edits log** - contains information about all cases of administrative edits.

**Log of administrators operations on servers** - includes all connections to servers and information about the type of activity performed on servers.

**Full log for auditing purposes**.

**Log for System Administrator.**