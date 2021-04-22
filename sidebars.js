module.exports = {
  docs: {
    Guides: [
      "getting-started",
      "mission-statement",
      "philosophy",
      "team-responsibilities-and-traits",
      "roles",
      {
        type: "category",
        label: "Best Practices",
        collapsed: true,
        items: [
          "best-practices/accessibility",
          "best-practices/documentation",
          "best-practices/internationalization"
        ]
      },
      {
        type: "category",
        label: "Source Control (Git)",
        collapsed: true,
        items: [
          "source-control/branching-merging"
        ]
      },
      "technology-stack",
      "software-development-lifecycle",
      "implementation-testing-workflow",
      "code-reviews",
      {
        type: "category",
        label: "Coding Standards",
        collapsed: true,
        items: [
          "coding-standards/python",
          "coding-standards/javascript",
          "coding-standards/react",
        ]
      },
      "infrastructure",
      "verified-commits",
      "commit-format",
      "tag-release-publish",
      "story-points",
      "browser-support"
    ],
    Help: [
      "authoring-guide",
      "using-mdx"
    ]
  }
}
