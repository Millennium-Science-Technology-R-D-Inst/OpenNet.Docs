# Build from source

This guide summarizes the environment and steps listed in the current OpenNet README. Compilers, SDKs and dependencies can change; follow the repository README and CI configuration if they are updated.

## Development environment

- Windows 11; the project recommends using a recent Windows version.
- Visual Studio 2026, version 18.11 or later.
- C++ Desktop Development, WinUI Desktop Development and C++ WinUI app tools.
- Windows 11 SDK 10.0.26100.0 or later.
- MSVC v145 / MSVC Preview; the README requires compiler version V14.52 or later.
- vcpkg. The Visual Studio integrated version can work; the README recommends a recent standalone installation.
- 64 GB or more of RAM is recommended. Keep ample SSD space for source, submodules and dependencies; the README recommends at least 50 GB free.

## Get the source

In Visual Studio, choose Clone Repository and enter:

    https://github.com/hoshiizumiya/OpenNet

Use a short path without spaces or non-ASCII characters. After cloning, initialize submodules from the repository root:

    git submodule update --init --recursive

## Open and run

1. Open OpenNet.slnx in Visual Studio.
2. Confirm OpenNet is the startup project in Solution Explorer.
3. Select a configuration and architecture, then start debugging.
4. The first run downloads and builds NuGet and vcpkg dependencies. The README gives an approximate first-build range of 30–100 minutes.

## Troubleshooting

- **Older compiler:** the README requires MSVC V14.52 or later.
- **Dependency download fails:** vcpkg and NuGet require network access; configure connectivity as appropriate for your environment.
- **Long or special-character paths:** move the repository to a shorter directory containing only ASCII characters.
- **Not enough disk space:** dependencies and intermediate build output require substantial space; retry on an SSD with more free space.

[Project README](https://github.com/hoshiizumiya/OpenNet/blob/master/README.md) · [Contribution guide](https://github.com/hoshiizumiya/OpenNet)
