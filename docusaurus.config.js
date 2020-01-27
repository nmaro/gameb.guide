module.exports = {
  title: "Game B Guide δ",
  tagline: "A Game B Player's Manual",
  url: "https://gameb.guide",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "nmaro", // Usually your GitHub org/user name.
  projectName: "gameb.guide", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Game B Guide",
      logo: {
        alt: "Game B Guide",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/doc1", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/nmaro/gameb.guide",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/doc1"
            },
            {
              label: "Learning",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/nmaro/gameb.guide/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
