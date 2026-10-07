# FAQ

## Does OpenNet support Windows 10?

Windows 10 is not in the current support plan. The project notes that it may run in some environments, but core functions, RPC calls or UI may have issues and fixes are not guaranteed. Windows 11 x64 or ARM64 is recommended.

## Where can I download OpenNet?

Use the [Microsoft Store page](https://apps.microsoft.com/detail/9nhbtsz6s5z2). Current version information is also available from [GitHub Releases](https://github.com/hoshiizumiya/OpenNet/releases).

## Do the NAT tools automatically open ports?

The current documentation describes the NAT tools as a way to check network status. Automatic NAT traversal is on the roadmap, so a status check should not be treated as automatic port mapping or traversal.

## Will RSS start downloads automatically?

OpenNet supports RSS subscriptions and automatic task addition. The result depends on your feed rules; review match conditions and download behavior before enabling them.

## How long does a first build take?

The first build prepares NuGet and vcpkg dependencies. Timing depends on network, hardware and build configuration. The project README gives an approximate range of 30–100 minutes.

## How do I report a problem?

Search existing reports in [OpenNet Issues](https://github.com/hoshiizumiya/OpenNet/issues). Include the app version, Windows version, reproduction steps and relevant logs. Do not include credentials or personal data in public reports.
