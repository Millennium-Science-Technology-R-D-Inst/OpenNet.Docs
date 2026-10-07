# 开发环境与构建

请在开始前核对[源仓库 README](https://github.com/hoshiizumiya/OpenNet)，因为依赖版本会变化。

推荐环境：Windows 11 25H2 或更新版本；Visual Studio 2026 18.11+；C++ Desktop Development、WinUI Desktop Development 与 C++ WinUI app tools；Windows SDK 10.0.26100+；MSVC v145 / Preview 且工具链 V14.52+；vcpkg。项目建议 64 GB 以上内存、50 GB 以上可用空间，并使用较短且不含空格的本地路径。

克隆 OpenNet 后，在仓库目录运行 git submodule update --init --recursive；在 Visual Studio 中打开 OpenNet.slnx，确认 OpenNet 为启动项目后启动调试。

首次构建会下载 NuGet 与 vcpkg 依赖并编译它们，README 给出的常见时间约 30–100 分钟。若要更新子模块，请先确认分支要求，再运行 git submodule update --remote --merge 并审查产生的提交变更。
