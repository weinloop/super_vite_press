import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "超级个体 · 需求 & 原型",
  description: "按 REQ 编码维护的功能需求与 UI 原型对应关系。",

  // GitHub Pages（项目页）通常需要 base=/<repo>/，本地 dev 用 /
  // 例如：https://weinloop.github.io/superoneman/  => base: "/superoneman/"
  base: process.env.DOCS_BASE ?? "/",

  cleanUrls: false,
  ignoreDeadLinks: [/^\/ui\//],

  themeConfig: {
    nav: [
      { text: "原型图入口", link: "/ui/index.html", target: "_blank", rel: "noopener noreferrer" },
      { text: "市场调研报告", link: "/req/REQ-018-001-超级个体平台-市场调研报告" },
      { text: "详细需求功能设计", link: "/req/REQ-018-002-超级个体平台-详细需求功能设计" },
      { text: "功能需求说明", link: "/req/REQ-018-002/INDEX" },
      { text: "REQ↔UI 对应关系", link: "/req-map/REQ-018-002" }
    ],

    sidebar: [
      {
        text: "原型图入口（UI）",
        items: [
          { text: "原型总入口", link: "/ui/index.html", target: "_blank", rel: "noopener noreferrer" }
        ]
      },
      {
        text: "需求文档",
        items: [
          { text: "REQ-018-001 市场调研报告", link: "/req/REQ-018-001-超级个体平台-市场调研报告" },
          { text: "REQ-018-002 详细需求功能设计", link: "/req/REQ-018-002-超级个体平台-详细需求功能设计" }
        ]
      },
      {
        text: "功能需求说明（REQ）",
        items: [
          { text: "REQ-018-002 模块索引", link: "/req/REQ-018-002/INDEX" },
          { text: "REQ-018-002-01 超级个体新闻", link: "/req/REQ-018-002/01-超级个体新闻/超级个体新闻" },
          { text: "REQ-018-002-02 如何成为超级个体", link: "/req/REQ-018-002/02-如何成为超级个体/如何成为超级个体" },
          { text: "REQ-018-002-03 通用能力", link: "/req/REQ-018-002/03-通用能力/通用能力" }
        ]
      },
      {
        text: "REQ ↔ UI 对应关系",
        items: [{ text: "REQ-018-002", link: "/req-map/REQ-018-002" }]
      }
    ],

    outline: [2, 3],
    search: { provider: "local" }
  }
});

