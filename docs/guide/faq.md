# 常见问题

## OpenNet 支持 Windows 10 吗？

Windows 10 不在当前支持计划中。项目说明指出它在部分环境下可能运行，但核心功能、RPC 调用或界面可能遇到问题，且不保证修复。推荐使用受支持的 Windows 11 x64 或 ARM64 设备。

## 我在哪里下载 OpenNet？

请使用 [Microsoft Store 页面](https://apps.microsoft.com/detail/9nhbtsz6s5z2)。当前版本信息也可以在 [GitHub Releases](https://github.com/hoshiizumiya/OpenNet/releases) 中查看。

## NAT 工具会自动打通网络吗？

目前文档将 NAT 工具描述为网络状态检查工具。自动 NAT 穿透列在开发路线图中，因此不能把状态检查当成自动端口映射或穿透已经完成。

## RSS 会自动开始下载吗？

项目支持 RSS 订阅与自动添加任务。自动化结果取决于你的订阅规则；启用前请检查匹配条件和下载行为。

## 首次构建需要多久？

构建时会准备 NuGet 与 vcpkg 依赖，时间取决于网络、硬件和构建配置。项目 README 给出的首次构建参考范围约为 30–100 分钟。

## 如何报告问题？

在 [OpenNet Issues](https://github.com/hoshiizumiya/OpenNet/issues) 中先搜索现有报告。提交时附上应用版本、Windows 版本、复现步骤和相关日志；不要在公开报告中加入账号凭据或个人数据。
