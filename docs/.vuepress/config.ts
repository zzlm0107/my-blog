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
    repo: 'https://github.com/zzlm0107/notes', // 导航栏显示的仓库地址
    editLink: false,
    navbar: [
      // NavbarItem
      {
        text: '学习笔记',
        children: [
          {
            text: 'HTML笔记',
            link: '/study-notes/html笔记.md',
          },
          {
            text: 'CSS笔记',
            link: '/study-notes/css笔记.md',
          },
          {
            text: 'Less笔记',
            link: '/study-notes/less笔记.md',
          },
          {
            text: 'Sass笔记',
            link: '/study-notes/Sass笔记.md',
          },
          {
            text: 'Bootstrap5笔记',
            link: '/study-notes/bootstrap5笔记.md',
          },
          {
            text: 'JS常用方法',
            link: '/study-notes/js常用方法.md',
          },
          {
            text: 'Ajax笔记',
            link: '/study-notes/ajax笔记.md',
          },
          {
            text: 'Axios笔记',
            link: '/study-notes/axios笔记.md',
          },
          {
            text: 'NodeJS笔记',
            link: '/study-notes/nodeJS笔记.md',
          },
          {
            text: 'Vue2笔记',
            link: '/study-notes/vue2笔记.md',
          },
          {
            text: 'Vue3笔记',
            link: '/study-notes/vue3笔记.md',
          },
          {
            text: 'Webpack笔记',
            link: '/study-notes/webpack笔记.md',
          },
          {
            text: 'Vite笔记',
            link: '/study-notes/vite笔记.md',
          }
        ],
      },
      // NavbarGroup
      {
        text: '项目笔记',
        children: [
          {
            text: 'vue项目文件命名规范',
            link: '/project-notes/vue项目文件命名规范.md',
          },
          {
            text: 'vue2项目简单启动',
            link: '/project-notes/vue2项目简单启动.md',
          },
          {
            text: '小兔鲜学习收获',
            link: '/project-notes/小兔鲜学习收获.md',
          },
          {
            text: '云平台搭建收获',
            link: '/project-notes/云平台搭建收获.md',
          },
          {
            text: '云平台重构收获',
            link: '/project-notes/云平台重构收获.md',
          },
        ]
      }
    ],
    lastUpdatedText: '上次更新', // 显示最近更新时的前缀
    contributorsText: '贡献者', // 显示贡献者时的前缀
    toggleColorMode: '换个风格' // 切换风格模式的hover提示
  }),
})