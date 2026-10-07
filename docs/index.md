---
layout: home

hero:
  name: OpenNet
  text: 面向 Windows 的下载与网络管理
  tagline: 从种子和磁力链接，到 HTTP 下载、RSS 与集成 WebUI，在一个原生 Windows 应用中管理你的任务。
  image:
    src: https://raw.githubusercontent.com/hoshiizumiya/OpenNet/master/OpenNet/Assets/AppIcons/StoreLogo.scale-400.png
    alt: OpenNet 应用图标
  actions:
    - theme: brand
      text: 从 Microsoft Store 获取
      link: https://apps.microsoft.com/detail/9nhbtsz6s5z2
    - theme: alt
      text: 开始使用
      link: /guide/overview

features:
  - title: 多来源下载
    details: 管理 BitTorrent 种子文件、磁力链接与 HTTP/HTTPS 下载任务。
  - title: RSS 订阅
    details: 订阅 RSS 源，并按规则自动添加下载任务。
  - title: 集成 WebUI
    details: 在应用中使用 WebUI 管理体验。
  - title: 网络状态工具
    details: 使用 NAT 工具检查网络状态；自动 NAT 穿透仍在开发路线图中。
---

## 界面预览

以下图片来自 OpenNet 源仓库的产品预览，实际界面可能随版本更新。

<div class="screenshot-grid">
  <figure>
    <img src="https://raw.githubusercontent.com/hoshiizumiya/OpenNet/master/docs/assets/TasksDownloadSpeedGraph.png" alt="OpenNet 下载任务速度图与概览界面" loading="lazy">
    <figcaption>任务概览与下载速度记录</figcaption>
  </figure>
  <figure>
    <img src="https://raw.githubusercontent.com/hoshiizumiya/OpenNet/master/docs/assets/TasksFiles.png" alt="OpenNet 任务文件列表" loading="lazy">
    <figcaption>查看任务包含的文件</figcaption>
  </figure>
  <figure>
    <img src="https://raw.githubusercontent.com/hoshiizumiya/OpenNet/master/docs/assets/TasksPagePeers.png" alt="OpenNet 对等节点列表" loading="lazy">
    <figcaption>查看任务的对等节点信息</figcaption>
  </figure>
</div>

## 项目状态

OpenNet 面向 Windows 11 x64 与 ARM64。自动 NAT 穿透、更多分布式网络能力与远程控制等功能属于路线图，文档会将它们和当前功能分开说明。

[查看项目概览](/guide/overview) · [阅读开发构建指南](/developer/build) · [GitHub 源码](https://github.com/hoshiizumiya/OpenNet)
