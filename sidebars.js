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
          "source-control/branching-merging",
          "source-control/code-reviews",
          "source-control/verified-commits",
          "source-control/commit-format",
          "source-control/tag-release-publish"
        ]
      },
      "wordpress-bug-tracking",
      "technology-stack",
      "software-development-lifecycle",
      "policies-and-procedures",
      "implementation-testing-workflow",
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
      "story-points",
      "browser-support"
    ],
    Help: [
      "authoring-guide",
      "using-mdx"
    ]
  }
}
