---
id: 4-qase-io
slug: /qa/4-qase-io
title: Qase.io
sidebar_label: Qase.io
---

*“Geeks are people who love something so much that all the details matter.”
~ Marissa Mayer, Yahoo! CEO*

We’re getting our 🦆 🦆 🦆 in a row: Everything we need is in [Shortcut](2-shortcut-test-plan.md) and the [Test Plan](3-google-doc-test-plan.md) is in place. Next we write test cases in [Qase.io](https://app.qase.io/projects).

Once you're signed in, click the appropriate project. In this example, we’ll use “User Registration and Management":

Qase Projects are mapped to better reflect Shortcut:

* `Shortcut---> Qase.io:`
* `Milestones-> Projects`
* `Epics------> Suites`
* `Card-------> Suite`

The Suite Tree contains the related Epics in Shortcut.

Back in Shortcut, click the Test Suite link you created in the [related card](https://docs.google.com/document/d/16o2_IHfGqI3ceCEkITphtZRsm8Cxfo7pmcEEgknAFjg/edit):

Hover over the Suite name and a set of options will appear. Click the “+” option and click “Create Case”

From “Create test case” page, fill out the following information

**Basic:**

* Title:
    * Succinct summary of what you are testing
* Status:
* Description:
    * An expanded description of the test case title if more information is necessary
* Suite:
    * The parent of the test case. This is typically pre-filled for you
* Severity
    * Priority
* Type
    * Behavior
* Automation Status
    * Not Automated
    * To be automated (select if preparing for future automated tests)
    * Automated

**Conditions:**

* Pre-conditions
    * Steps that detail any conditions that need to be set before testing can begin
* Example: User has not filled out the “Customize Your Experience” form
    * Post-conditions
* What the outcome of the test should be
    * *Example: User has completed the “Customize Your Experience” form*

**Custom Fields:**

* Shorcut Card:
    * Link redirecting back to the Clubhouse Card
* Comments:
    * Any additional information that is helpful when testing
* Test Plan:
    * Link redirecting back to the Test Plan

**Attachments:**

* Any screenshots that bring clarity to the testing process

**Params:**

* Great for documenting User-Service or API calls

**Steps to Reproduce:**

* A step by step guide on how to perform the test. Please read the “[QA Best Practices for Stakeholders](https://docs.google.com/document/d/1ZyyZfh1J1d119JeKUSq-kv2EbZ5rR5aXa5xOT8PkLZg/edit#)” to learn more about how to outline clear and concise Steps to Reproduce.

From the Steps to Reproduce section, click “Add Step”

Three fields will display where you can outline what action to take, provide example input data, and what the expected result will be.

One of the awesome things about Qase is that nearly every line (except the Title) can be modified. For example: Maybe, you don’t feel like rewriting the 10 steps to create the conditions needed for this test. That’s okay! Select the text that refers to the existing test and click the chain link option. A pop-up displays at the top of the screen where you can input the link you need into the field.

After the Steps to Reproduce are completed, click “Save”.

Woo hoo! Now onto the next test case!

**Qase Tips and Tricks:**

* Want to fast track your test case writing since you only need to change a few key words? You can clone a test case by clicking the existing test case and clicking the “Clone” option.

* Did you test something in the User-Service and now need to test the same cases in the API? Hover over the Suite Name, click the clone option and a pop-up will appear. Select the Epic name from the 2nd dropdown, and click the “Clone with Children” checkbox. Edit the suite to reflect the correct tests and you’re done!

You’ve mastered the basics! Now let’s put Automation in place using TestCafe and Cypress.
