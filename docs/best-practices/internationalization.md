---
slug: /best-practices/internationalization
title: Internationalization (i18n)
---

Our users will never be from the same region, so our software should be designed to accommodate all users’ languages and formats.

* Leverage the user’s browser information to set local automatically
* Put all text content in i18n template tags, do not directly display strings
* Use proper formatters for number content

## React

Our React apps use [next-itnl](https://github.com/amannn/next-intl) for i18n.
