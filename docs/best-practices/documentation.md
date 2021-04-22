---
slug: /best-practices/documentation
title: Documentation
---

Documentation isn’t for yourself or your current team members. It is for the future developers that were not there when you first wrote the code. Documentation should reflect the engineering of the solution, not the code itself.

* Code should be “self-documenting”; use descriptive names and break code into logical blocks
* Add comments for “why you did something” not “what you did” when needed
* Public APIs should include DocBlocks for automatic documentation generation
* Create and maintain Product Documentation for end-users
    * Not technical documentation
    * Lists features and how to use them
* Create and maintain a Technical Design Logbook
    * Explain how and why we chose each solution
    * The document should be added to each repository as a Markdown file
* Create and maintain Technical Schemas
    * Database schemas
        * Entity Relationship Diagrams
    * Architecture schemas
        * Explains how different parts interact together
    * Sequence Diagrams
        * Displays successive stages of a workflow
