import { defineConfig } from 'vitepress'

const base = process.env.GITHUB_ACTIONS === 'true' ? '/OpenNet.Docs/' : '/'
const repository = 'https://github.com/Millennium-Science-Technology-R-D-Inst/OpenNet.Docs'
const product = 'https://github.com/hoshiizumiya/OpenNet'

const zhNav = [
  { text: '项目', link: '/project' },
  { text: '快速开始', link: '/guide/quick-start' },
  { text: '功能指南', link: '/features/' },
  { text: '帮助与支持', items: [
    { text: '常见问题', link: '/guide/faq' },
    { text: '故障排查', link: '/guide/troubleshooting' },
    { text: '发展路线图', link: '/developer/roadmap' }
  ]},
  { text: '开发者', link: '/developer/build' }
]
const enNav = [
  { text: 'Project', link: '/en-US/project' },
  { text: 'Quick start', link: '/en-US/guide/quick-start' },
  { text: 'Features', link: '/en-US/features/' },
  { text: 'Help & support', items: [
    { text: 'FAQ', link: '/en-US/guide/faq' },
    { text: 'Troubleshooting', link: '/en-US/guide/troubleshooting' },
    { text: 'Roadmap', link: '/en-US/developer/roadmap' }
  ]},
  { text: 'Developers', link: '/en-US/developer/build' }
]

const zhSidebar = {
  '/project': [{ text: '项目', items: [{ text: '项目介绍', link: '/project' }] }],
  '/guide/': [{ text: '开始使用', items: [
    { text: '快速开始', link: '/guide/quick-start' },
    { text: '下载与安装', link: '/guide/download' },
    { text: '常见问题', link: '/guide/faq' },
    { text: '故障排查与反馈', link: '/guide/troubleshooting' }
  ]}],
  '/features/': [{ text: '功能指南', items: [
    { text: '功能总览', link: '/features/' },
    { text: '任务管理', link: '/features/tasks' },
    { text: 'BitTorrent 下载', link: '/features/bittorrent' },
    { text: 'HTTP / HTTPS 下载', link: '/features/http' },
    { text: 'RSS 订阅', link: '/features/rss' },
    { text: '集成 WebUI', link: '/features/webui' },
    { text: '网络与 NAT 工具', link: '/features/network' }
  ]}],
  '/developer/': [{ text: '开发者文档', items: [
    { text: '开发环境与构建', link: '/developer/build' },
    { text: '技术架构', link: '/developer/architecture' },
    { text: '参与贡献', link: '/developer/contribute' },
    { text: '本地化与文档翻译', link: '/i18n' },
    { text: '发展路线图', link: '/developer/roadmap' },
    { text: '相关项目', link: '/developer/ecosystem' }
  ]}]
}
const enSidebar = {
  '/en-US/project': [{ text: 'Project', items: [{ text: 'About OpenNet', link: '/en-US/project' }] }],
  '/en-US/guide/': [{ text: 'Getting started', items: [
    { text: 'Quick start', link: '/en-US/guide/quick-start' },
    { text: 'Download and install', link: '/en-US/guide/download' },
    { text: 'FAQ', link: '/en-US/guide/faq' },
    { text: 'Troubleshooting and feedback', link: '/en-US/guide/troubleshooting' }
  ]}],
  '/en-US/features/': [{ text: 'Feature guides', items: [
    { text: 'Feature overview', link: '/en-US/features/' },
    { text: 'Task management', link: '/en-US/features/tasks' },
    { text: 'BitTorrent downloads', link: '/en-US/features/bittorrent' },
    { text: 'HTTP / HTTPS downloads', link: '/en-US/features/http' },
    { text: 'RSS subscriptions', link: '/en-US/features/rss' },
    { text: 'Integrated WebUI', link: '/en-US/features/webui' },
    { text: 'Network and NAT tools', link: '/en-US/features/network' }
  ]}],
  '/en-US/developer/': [{ text: 'Developer documentation', items: [
    { text: 'Development and build', link: '/en-US/developer/build' },
    { text: 'Architecture', link: '/en-US/developer/architecture' },
    { text: 'Contributing', link: '/en-US/developer/contribute' },
    { text: 'Localization and docs', link: '/en-US/i18n' },
    { text: 'Roadmap', link: '/en-US/developer/roadmap' },
    { text: 'Related projects', link: '/en-US/developer/ecosystem' }
  ]}]
}

export default defineConfig({
  base, title: 'OpenNet for Windows', description: 'OpenNet for Windows documentation',
  outDir: '../dist', cleanUrls: true, lastUpdated: true, appearance: 'dark',
  head: [['link', { rel: 'icon', href: base + 'favicon.svg' }]],
  locales: {
    root: {
      label: '简体中文', lang: 'zh-CN', title: 'OpenNet for Windows',
      description: 'OpenNet for Windows 的使用、功能与开发文档。',
      themeConfig: {
        nav: zhNav, sidebar: zhSidebar,
        editLink: { pattern: repository + '/edit/main/docs/:path', text: '在 GitHub 上编辑此页' },
        lastUpdated: { text: '最后更新' },
        footer: { message: '由 OpenNet 社区维护 · 使用 VitePress 构建', copyright: 'OpenNet for Windows' },
        search: { provider: 'local', options: { locales: {
          root: { translations: {
            button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
            modal: { noResultsText: '没有找到相关结果', resetButtonTitle: '清除搜索', footer: { selectText: '选择', navigateText: '切换' } }
          }}
        }}}
      }
    },
    'en-US': {
      label: 'English', lang: 'en-US', link: '/en-US/', title: 'OpenNet for Windows',
      description: 'User, feature, and developer documentation for OpenNet for Windows.',
      themeConfig: {
        nav: enNav, sidebar: enSidebar,
        editLink: { pattern: repository + '/edit/main/docs/en-US/:path', text: 'Edit this page on GitHub' },
        lastUpdated: { text: 'Last updated' },
        footer: { message: 'Maintained by the OpenNet community · Built with VitePress', copyright: 'OpenNet for Windows' }
      }
    }
  },
  themeConfig: {
    logo: base + 'favicon.svg', siteTitle: 'OpenNet for Windows',
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: product }]
  }
})
