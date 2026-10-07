# Development and build

Review the [source README](https://github.com/hoshiizumiya/OpenNet) before building because dependency requirements can change.

Recommended environment: Windows 11 25H2 or later; Visual Studio 2026 18.11+; C++ Desktop Development, WinUI Desktop Development, and C++ WinUI app tools; Windows SDK 10.0.26100+; MSVC v145 / Preview with toolchain V14.52+; and vcpkg. The project recommends 64 GB or more RAM, 50 GB free space, and a short local path without spaces.

Clone OpenNet and run git submodule update --init --recursive from the repository. Open OpenNet.slnx in Visual Studio, confirm OpenNet is the startup project, then start debugging.

The first build downloads and compiles NuGet and vcpkg dependencies; the README gives a typical range of 30–100 minutes. Before updating submodules, confirm the branch expectations, run git submodule update --remote --merge, and review the resulting commit changes.
