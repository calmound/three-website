import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: "Threejs学习",
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
      additionalLinkTags: [{ rel: "icon", href: "/favicon.ico" }],
    };
  },
  // project: {
  //   link: "https://github.com/shuding/nextra-docs-template",
  // },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "",
  },
  search: {
    placeholder: "关键字搜索", // 修改此处的文本
  },
  toc: {
    title: "目录", // 右侧顶部title
  },
  feedback: {
    content: "", // 修改此处的文本
  },
  editLink: {
    text: "", // 右侧编辑链接文本
  },
};

export default config;
