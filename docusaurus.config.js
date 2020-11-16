module.exports = {
  title: "The Art of Education University",
  tagline: "Software Engineering Documentation",
  url: "https://theartofeducation.github.io",
  baseUrl: "/engineering",
  onBrokenLinks: "throw",
  favicon: "icons/favicon-32x32.png",
  organizationName: "theartofeducation",
  projectName: "engineering-docs",
  themeConfig: {
    navbar: {
      title: "The Art of Education University | Software Engineering Documentation",
      logo: {
        alt: "The Art of Education University Logo",
        src: "images/aoeu-logo-mark.svg",
      },
      items: []
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            }
          ]
        },
        {
          title: "The Art of Education University",
          items: [
            {
              label: "Home",
              href: "https://theartofeducation.edu",
            },
            {
              label: "Software Engineering",
              href: "https://theartofeducation.github.io",
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://theartofeducation.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Art of Education University. Built with Docusaurus.`,
    }
  },
  plugins: [
    "docusaurus-plugin-sass"
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/theartofeducation/engineering-docs",
        },
        theme: {
          customCss: [require.resolve("./src/sass/custom.scss")],
        },
      }
    ]
  ]
}
