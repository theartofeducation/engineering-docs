---
id: 5-accessibility
slug: /qa/5-accessibility
title: Accessibility
sidebar_label: Accessibility
---

*I wish for a world that views disability, mental or physical, not as a hindrance but as unique attributes that can be seen as powerful assets if given the right opportunities.”
~ Oliver Sacks*

At AOEU, we believe in making the rigorous, relevant, and engaging content we create available and accessible to all. This points us to using tools that accomplish exactly that.
This is an area we will always grow in. When we learn about tools that make us better testers on the path to accessibility, those will be learned, integrated, and documented.

**AxeTools:**

Axe DevTools is a [browser extension](https://www.deque.com/axe/browser-extensions/) available for [Chrome](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), and [Edge](https://microsoftedge.microsoft.com/addons/detail/axe-web-accessibility-t/kcenlimkmjjkdfcaleembgmldmnnlfkn). [Deque Systems](https://www.deque.com/) created the extension to quickly catch accessibility issues caused by insufficient color contrast, elements that need to be identified for screen reader usage, and much more.
Installation and usage is easy peasy so let’s get started.

First, [select the browser](https://www.deque.com/axe/browser-extensions/) you want to start with. Click the appropriate link. You’ll be redirected to the browser extension page where you can click “Add to Chrome” or the browser of your choice. Typically a popup will appear asking to verify your choice. Click “Add Extension”. Success! Let’s open it up and check it out.

1. Navigate to The Art of Education University page.
2. Right click anywhere on the page and click “Inspect” from the popup that appears
3. From your dev tools you should now see an option for axe DevTools. Click it.
4. From here, the extension will ask you what your role is. Select “Tester”
5. Select the checkbox for the Terms of Service and click “Start Using Axe DevTools”
6. As of June 2021, we don’t have an account with axe DevTools so for now, we’ll use the free version. No need to sign in.
7. Click the “Scan all of my Page” option
8. Clicking the link associated with the issues, axe outlines the list of issues by categories
9. Clicking the option “Highlight” in the sub navigation menu identifies an individual issue and highlights which piece of the page is not meeting standards
10. You can navigate through the remaining issues by using the issue navigation section available just above the sub-navigation menu
11. As you continue to click through, the remaining issues will be highlighted individually
12. To stop the “Highlight’ click “Stop Highlight”
13. Clicking “Inspect” redirects you automatically to the the portion of the HTML that is not meeting Accessibility standards
14. Clicking “More Info” redirects you to a page that explains in detail the issue you are seeing and what constitutes a successful resolution according to standards
15. Here is an example page: [Text elements must have sufficient color contrast against the background](https://dequeuniversity.com/rules/axe/4.2/color-contrast?application=AxeChrome)

As you test, if an issue appears, write up the issue in the comments section of the Shortcut card you are testing

* Provide as much information as you can using the highlight and the inspect option
* Provide the type of error that’s displaying in axe
* Provide valid steps to reproduce the issue if the issue occurs only within certain circumstances

Use Axe DevTools when you are testing different devices. Some issues do not occur in the desktop view but may be discovered in the mobile view

**Additional Resources:**

* **Got a question for the Axe Community?** You can join the axe community in their [Slack](https://accessibility.deque.com/thank-you-axe-community) channel.
* **Want to know more about Accessibility and where the standards come from?** Read more about [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)

Do you know of a tool that will help us reach our goal of creating accessibility for everyone? Put your idea in the softwareengineering channel. Let’s talk about it!

**References:**

[https://www.ted.com/talks/caroline_casey_looking_past_limits](https://www.ted.com/talks/caroline_casey_looking_past_limits )
[https://www.ted.com/talks/isaac_lidsky_what_reality_are_you_creating_for_yourself](https://www.ted.com/talks/isaac_lidsky_what_reality_are_you_creating_for_yourself )
