---
slug: /qa/google-doc-test-plan
title: Google Doc Outline and Setup
---

## Google Doc Outline and Setup

*“Software testing is not only ensuring absence of bugs but also ensuring presence of value.”
― Amit Kalantri*

**Google Test Plan**

Alright! So far so good. You’ve taken the [Test Plan Template](https://docs.google.com/document/d/1x9SMIE0oQKkLs-1dHojrDUh6BS22avjVVF3_PWhC9rM/edit#heading=h.1suokh672aje) and turned it into the placeholder for your test scenarios and the functionality it covers.
Let’s break apart what each section covers, how to create Test Scenarios and what to consider while testing the current Shortcut card.

**The Breakdown:**

* Card:

  * This helps track back to the original story. Copy and paste the Shortcut card here.

* Acceptance Criteria:

  * This is the criteria that defines the functionality - the original intent of what needs to be tested.

* Test Plan:

  * The Test Plan breaks apart each category that needs to be checked when testing new functionality. Not all categories apply, in which case, put “N/A” for the category that does not apply

* Test Scenarios:

  * The test scenarios cover the many ways that a user can use the functionality
  * Documenting how functionality behaves under specific circumstances is housed here.
For example:
  * *Any user cannot login without following the correct email format*
  * *Any user can login when following the correct email format*
This defines what a user can or cannot do under specific circumstances. These scenarios are the groundwork for the test cases that are added in Qase.io

* Browser Compatibility and Viewports:

  * These are defined by the [Non-Functional Requirements](https://docs.google.com/document/d/1CRVz9Bm16msQEJ0tHjYZiUaJE75UiBHjVC-ofAGVjgk/edit#heading=h.d59y8yxyeqk8) document. These are checked when front end functionality is affected.

* A11y Testing:

* Accessibility testing is crucial for users that have specific needs which aid in device usage. We want our software to be inclusive on every level and Accessibility testing is how we achieve this.
* Our current tool is the [AXE DevTools Browser Extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) which we’ll discuss in the [Accessibility](https://docs.google.com/document/d/1SqFKZVzQU9RVII60cyNagdafTVqVmHMJ6zF0ws0mSUw/edit#heading=h.kwmjf2rbjxk9) testing document.

* SQL Injection Testing:

  * Keeping bad actors out of our system is crucial to the mission of “Growing Amazing Art Teachers”.
  * Our current tool to test [SQL Injection](https://sqlmap.org/) vulnerabilities is SQLMap. We’ll take a deeper look into this tool in our Security documentation.

* Automation Test Created:

  * The only piece of information needed here is the link you created for Shortcut.
  * We’ll cover the usage of Qase.io in our [Test Case Management](https://docs.google.com/document/d/1Rr6l4KkTMogOi4Fb_RKZmrXbzWrQZ1rOvgfJ0TFE_GI/edit#heading=h.kwmjf2rbjxk9) documentation.
