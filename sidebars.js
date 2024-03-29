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
          "best-practices/dependency-updates",
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
          "source-control/new-repo"
        ]
      },
      {
        type: "category",
        label: "Quality Assurance",
        collapsed: true,
        items: [
          "qa/1-introduction",
          "qa/2-shortcut-testplan-setup",
          "qa/3-google-doc-test-plan",
          "qa/4-qase-io",
          "qa/5-accessibility"
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
          "coding-standards/javascript-react",
          "coding-standards/python",
          "coding-standards/go",
        ]
      },
      "infrastructure",
      "sprint-planning",
      "story-points",
      "browser-support"
    ],
    Help: [
      "authoring-guide",
      "using-mdx"
    ]
  }
}
