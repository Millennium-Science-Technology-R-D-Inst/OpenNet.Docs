# 从源码构建

本指南概括 OpenNet README 当前列出的环境要求与构建步骤。依赖、编译器和 SDK 会随项目更新；若仓库文档有更新，请以 README 和 CI 配置为准。

## 开发环境

- Windows 11；项目建议使用较新的系统版本。
- Visual Studio 2026，版本 18.11 或更高。
- C++ Desktop Development、WinUI Desktop Development，以及 C++ WinUI 应用工具。
- Windows 11 SDK 10.0.26100.0 或更高版本。
- MSVC v145 / MSVC Preview；编译器需为 V14.52 或更高版本。
- vcpkg。Visual Studio 集成版可用；项目 README 建议使用较新的独立版本。
- 建议 64 GB 或更多内存，并为源码、子模块和依赖留出充足 SSD 空间；README 建议至少 50 GB 可用空间。

## 获取源码

在 Visual Studio 中选择克隆存储库，并克隆：

    https://github.com/hoshiizumiya/OpenNet

路径尽量简短，避免空格和非 ASCII 字符。克隆完成后，在仓库根目录初始化子模块：

    git submodule update --init --recursive

## 打开并运行

1. 在 Visual Studio 中打开 OpenNet.slnx。
2. 在解决方案资源管理器中确认 OpenNet 是启动项目。
3. 选择所需配置和架构，然后开始调试。
4. 首次运行会下载并编译 NuGet 与 vcpkg 依赖。项目 README 给出的首次构建参考范围约为 30–100 分钟。

## 可能遇到的问题

- **编译器过旧**：项目 README 指出需要 MSVC V14.52 或更高版本。
- **依赖下载失败**：vcpkg 和 NuGet 都需要网络访问；在受限网络环境下按项目要求配置网络。
- **路径过长或包含特殊字符**：尝试把仓库移到更短且只含 ASCII 字符的目录。
- **磁盘空间不足**：依赖和中间产物占用空间较大；清理或更换到空间充足的 SSD 后再构建。

[项目 README](https://github.com/hoshiizumiya/OpenNet/blob/master/README.md) · [贡献指南](https://github.com/hoshiizumiya/OpenNet)
