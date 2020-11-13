module.exports = {
  docs: {
    Guides: [
      "getting-started",
      "technology-stack",
      "software-development-lifecycle",
      "code-reviews",
      {
        type: "category",
        label: "Coding Standards",
        collapsed: false,
        items: [
          "coding-standards/python",
          "coding-standards/javascript",
          "coding-standards/react",
        ]
      },
      "infrastructure",
      "verified-commits",
      "branching-merging",
      "commit-format",
      "story-points",
      "browser-support"
    ],
    Help: [
      "authoring-guide",
      "using-mdx"
    ]
  }
}
