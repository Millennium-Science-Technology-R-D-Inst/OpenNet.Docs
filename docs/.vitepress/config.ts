import { defineConfig } from 'vitepress'

const base = process.env.GITHUB_ACTIONS === 'true' ? '/OpenNet.Docs/' : '/'
const repository = 'https://github.com/Millennium-Science-Technology-R-D-Inst/OpenNet.Docs'

const chineseNav = [
  { text: '开始使用', link: '/guide/overview' },
  {
    text: '指南',
    items: [
      { text: '下载与安装', link: '/guide/download' },
      { text: '常见使用流程', link: '/guide/usage' },
      { text: '常见问题', link: '/guide/faq' }
    ]
  },
  { text: '开发者', link: '/developer/build' }
]

const englishNav = [
  { text: 'Get started', link: '/en-US/guide/overview' },
  {
    text: 'Guides',
    items: [
      { text: 'Download and install', link: '/en-US/guide/download' },
      { text: 'Common workflows', link: '/en-US/guide/usage' },
      { text: 'FAQ', link: '/en-US/guide/faq' }
    ]
  },
  { text: 'Developers', link: '/en-US/developer/build' }
]

const chineseSidebar = {
  '/guide/': [
    {
      text: '使用 OpenNet',
      items: [
        { text: '项目概览', link: '/guide/overview' },
        { text: '下载与安装', link: '/guide/download' },
        { text: '常见使用流程', link: '/guide/usage' },
        { text: '常见问题', link: '/guide/faq' }
      ]
    }
  ],
  '/developer/': [
    {
      text: '开发者指南',
      items: [{ text: '从源码构建', link: '/developer/build' }]
    }
  ]
}

const englishSidebar = {
  '/en-US/guide/': [
    {
      text: 'Using OpenNet',
      items: [
        { text: 'Overview', link: '/en-US/guide/overview' },
        { text: 'Download and install', link: '/en-US/guide/download' },
        { text: 'Common workflows', link: '/en-US/guide/usage' },
        { text: 'FAQ', link: '/en-US/guide/faq' }
      ]
    }
  ],
  '/en-US/developer/': [
    {
      text: 'Developer guide',
      items: [{ text: 'Build from source', link: '/en-US/developer/build' }]
    }
  ]
}

export default defineConfig({
  base,
  title: 'OpenNet',
  description: 'OpenNet for Windows documentation',
  outDir: '../dist',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',
  head: [['link', { rel: 'icon', href: base + 'favicon.svg' }]],
  themeConfig: {
    logo: base + 'favicon.svg',
    siteTitle: 'OpenNet',
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/hoshiizumiya/OpenNet' }],
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN',
        title: 'OpenNet 文档',
        description: 'OpenNet for Windows 使用与开发文档',
        themeConfig: {
          nav: chineseNav,
          sidebar: chineseSidebar,
          editLink: {
            pattern: repository + '/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
          },
          lastUpdated: { text: '最后更新' },
          footer: {
            message: '由 OpenNet 社区维护',
            copyright: 'OpenNet for Windows'
          }
        }
      },
      'en-US': {
        label: 'English',
        lang: 'en-US',
        title: 'OpenNet Docs',
        description: 'User and developer documentation for OpenNet for Windows',
        themeConfig: {
          nav: englishNav,
          sidebar: englishSidebar,
          editLink: {
            pattern: repository + '/edit/main/docs/en-US/:path',
            text: 'Edit this page on GitHub'
          },
          lastUpdated: { text: 'Last updated' },
          footer: {
            message: 'Maintained by the OpenNet community',
            copyright: 'OpenNet for Windows'
          }
        }
      }
    }
  }
})
