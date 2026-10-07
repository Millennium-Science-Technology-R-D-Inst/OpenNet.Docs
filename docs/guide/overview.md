# 项目概览

OpenNet 是一款以 Windows 为目标平台的下载与网络管理应用，当前使用 WinUI 3 与 C++/WinRT 构建。它将下载任务、RSS 订阅、WebUI 体验和网络状态工具放在同一个桌面应用中。

## 当前功能

- 通过 .torrent 文件或磁力链接创建 BitTorrent 下载任务。
- 管理 HTTP/HTTPS 下载任务。
- 订阅 RSS 源并按设置自动添加下载任务。
- 使用集成 WebUI 体验管理任务。
- 查看任务文件、对等节点和速度图等信息。
- 使用 NAT 工具检查网络状态。

自动 NAT 穿透、DHT、PEX、LSD、远程控制及用户账户等项目仍列在开发路线图中；请勿将它们理解为当前已交付能力。

## 系统支持

项目当前支持 Windows 11 x64 与 ARM64。Windows 10 不在支持计划内；虽然部分环境可能能够运行，但核心功能、RPC 调用或界面可能出现问题。

## 下一步

- [下载与安装](/guide/download)
- [常见使用流程](/guide/usage)
- [常见问题](/guide/faq)
- [从源码构建](/developer/build)

[打开 OpenNet 源码仓库](https://github.com/hoshiizumiya/OpenNet)
