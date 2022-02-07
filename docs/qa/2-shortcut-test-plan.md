---
id: 2-shortcut-testplan-setup
slug: /qa/2-shortcut-testplan-setup
title: Shortcut/Test Plan Setup
sidebar_label: Shortcut/Test Plan Setup
---

Shortcut is the Project Management software our team uses for managing all projects, features, bugs, etc.
You’ll be given access to [AOEU’s Software Engineering board](https://app.shortcut.com/aoeu-se/stories/space/126/everything). This document outlines your role as a QA Engineer when using Shortcut.

**Columns**
Each card begins in the Backlog. With every card created, the **Backlog** is where Acceptance Criteria is defined, questions are asked/answered, tasks are outlined when needed and labels are appropriately applied.
When creating a card, the following is required:

**Title:** A succinct description of the body of work the card will address

**Description:** A deeper explanation of the title.
If the card is a bug, the following fields with markdown are required:

* `## Expected:`
* `## Actual:`
* `## Users Affected:`
* `## Video/Screenshots:`
* `## Steps to Reproduce:`
* `## Notes:`

The sidebar on the right contains the remaining required fields: **Project**, **State**, **Team**, **Epic**, **Type**, and **Requester**.

**Tasks** (Optional): Tasks fulfill a multi-purpose function. These are used to break the card down into small chunks and are checked off when completed. In addition, when creating additional cards related to the parent card, clicking the green arrow converts the card to a new story, at the same time, relating the cards together. This prevents cards from being lost in the process.

Once the card is defined and approved by the team, the card is moved to **Ready for Development**.

If the card is in **Ready for Development** and in the current iteration, it can be picked up by the assigned developer according to priority. Priority is set from the top cards being the most important to the bottom cards being the least important.

At this point, the QA testing the card can set up the Test Plan and the Test Suite.

The [Test Plan Template](https://docs.google.com/document/d/1x9SMIE0oQKkLs-1dHojrDUh6BS22avjVVF3_PWhC9rM/edit#heading=h.1suokh672aje) offers a guide for testing. When using the template, follow this procedure:

* Make a copy of the Test Plan Template by clicking File->Make a Copy
* With the Shortcut card open, copy the Title of the card and enter it in the Name field in the “Copy document” popup
* Note the Epic selected in the Shortcut card and from the “Copy document” popup field, click the Folder field that starts with "Quality Assurance"
* Select "Test Plans/Test Cases", select "Milestones", select the related Milestone, then select the related Epic
* Click the “Select” button and click the checkbox “Share it with the same people”
* Copy the link of the Shortcut card and paste it in the newly created Test Plan document “Card:” field
In the Clubhouse card, click “Edit Description” and in the Description field, enter this text/markdown:
    * `Test Plan: []()`
    * `Test Suite: []()`
    * `Test Run: []()`
* Copy the link of the newly created Test Plan document and paste it in the parenthese of the Test Plan. Enter the title of the Test Plan in the Brackets
* Open Qase.io
* Click the Project Name icon
* Using the Suite Tree, click the appropriate Milestone name
* If the Epic name does not display within the Mileston project, click "Create Suite". This will be the parent suite
* For the card we are working on, click the Epic Parent Suite, and click “Create Suite”
* From the popup that displays, enter the title in the following format:
    * Suite Name: Input the name of the Shortcut Card, the Project it’s connected with, and an annotated Card Reference. Example: User Base Profile: User-Service - CL307
    * Parent Suite: The parent suite is the suite (Epic) selected from the Suite Tree - this represents the Epics in Clubhouse
    * Description: A short description of the card and its function and a link to the Shortcut card for trackability
* Click “Create”
* Find and click the newly create Test Suite created in Qase
* Copy the link of the Test Suite
* Paste the link in the Clubhouse card in the parenthese of the `Test Suite: []()` field
* Back in Qase, copy the title of the Test Suite
* Paste the title of the Test Suite in the brackets of the `Test Suite: []()` field
* In the Shortcut card, click “Save”
* Within the Shortcut card, right click and copy the link of the newly added Test Plan
* Click the “External Links” button in the “Add to Story” section of the card
* Right click and paste the copied link in the “External Link” field
* Click “Add to Story”
* Right click and copy the link of the newly added Test Suite
* Click the “External Links” button in the “Add to Story” section of the card
* Right click and paste the copied link in the “External Link” field
* Click “Add to Story”

You’re done! The Shortcut card now has all the elements ready for testing.
The rest of the process is described in the Software Engineering Handbook under Software Development Life Cycle

Next, let’s dive deeper into the [Google Doc Test Plan](3-google-doc-test-plan) and [Qase.io](4-qase-io).
