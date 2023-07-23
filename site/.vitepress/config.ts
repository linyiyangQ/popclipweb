import { defineConfig } from "vitepress";
import imageFigures from "markdown-it-image-figures";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PopClip",
  description: "Instant text actions for macOS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icon128.png",
    nav: [
      {
        text: "Documentation",
        activeMatch: "^(/guide/|/ref/|/changelog)",
        items: [
          { text: "User Guide", link: "/guide/" },
          { text: "Developer Reference", link: "/ref/" },
        ],
      },
      {
        text: "Extensions",
        items: [
          { text: "Directory", link: "/x/" },          
          { text: "Create Your Own", link: "/create/" },          
        ],
      },
      {
        text: "Support",
        items: [
          { text: "Support & Feedback", link: "/guide/support" },
          { text: "PopClip Forum", link: "https://forum.popclip.app/" },
        ],
      },
     
    ],
    sidebar: [
      {
        text: "User Guide",
        items: [
          { text: "Introduction", link: "/guide/" },
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Basics", link: "/guide/basics" },
          { text: "Settings", link: "/guide/settings" },
          { text: "Extensions", link: "/guide/extensions" },
          { text: "Support & Feedback", link: "/guide/support" },
        ],
      },
      {
        text: "App Information",
        items: [
          { text: "Download", link: "" },
          { text: "Purchase", link: "/buy" },
          {
            text: "Version History",
            link: "/changelog",
          },
        ],
      },
      {
        text: "Policies",
        items: [
          { text: "Terms of License", link: "/terms.md" },
          { text: "Privacy Policy", link: "/privacy.md" },
        ],
      },
      {
        text: "Knowledge Base",
        items: [
          { text: "Known Issues", link: "/kb/compatibility" },
          { text: "Troubleshooting", link: "/guide/troubleshooting" },
          { text: "FAQ", link: "/guide/faq" },
          { text: "Browsers", link: "/kb/compatibility" },
        ],
      },
      {
        text: 'Developer Reference',
        link: '/ref/'
      }
    ],
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  head: [
    [
      "link",
      { rel: "shortcut icon", href: "/icon32.png", type: "image/png" },
    ],
  ],
  markdown: {
    // config: (md) => {
    //   md.use(imageFigures, {
    //     figcaption: 'title',
    //     copyAttrs: '^class$',
    //   });
    // },
  },
});
