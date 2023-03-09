import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/my-blog/',
  lang: 'zh-CN',
  title: '正の博客',
  description: '这是用来记录前端开发的学习笔记以及遇到的各种问题',
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  host: '0.0.0.0',
  port: 9527,

  theme: defaultTheme({
    logo: '/images/logo.jfif',
    logoDark: null,
    repo: 'https://github.com/zzlm0107/my-blog', // 导航栏显示的仓库地址
    editLink: false,
    navbar: [
      // NavbarItem
      {
        text: '学习笔记',
        link: '/study-notes/',
      },
      // NavbarGroup
      {
        text: '项目笔记',
        link: '/project-notes/',
      }
    ],
    sidebar: false,
    lastUpdated: true, // 开启显示最近更新
    lastUpdatedText: '上次更新'
  }),
})