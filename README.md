# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Writing Documentation

In most cases, adding new documentation will involve adding a new file and/or subfolder with file(s) to the `/docs` folder in the project, and starting to write. Files should have either an `.md` extension if you're just writing plain [Markdown](https://www.markdownguide.org/), or an `.mdx` extension of you're writing [MDX](https://mdxjs.com/) (Markdown with JSX components). You can look at existing documents for general examples of how they should be formatted, but you will want to ensure that you add [frontmatter](https://v2.docusaurus.io/docs/markdown-features/#markdown-headers) at the top of your document with at least an `id` and a `title` attribute, giving the document a unique ID, and a title to display in the sidebar links and page title. Here's what an example new document might look like:

```md
---
id: my-awesome-new-document
title: My Awesome New Document
---

Oh man, you're really gonna love this...
```

Once your document(s) are in place, make them available in the sidebar navigation by updating the [sidebars.js](/sidebars.js) file with the `id` of the document in the place that you wish for it to appear in the treeview hierarchy of links in the sidebar.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
