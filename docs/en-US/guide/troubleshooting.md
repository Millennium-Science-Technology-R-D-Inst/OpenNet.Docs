# Troubleshooting and feedback

**The app will not install or start:** Confirm Windows 11 and the x64 or ARM64 architecture, check the Microsoft Store for updates, then restart the app. Windows 10 is outside the support plan.

**An HTTP download fails:** Confirm the URL is reachable and check your network, proxy, and firewall. Support for login, custom headers, or CAPTCHA depends on the implementation. Do not publish access tokens or private URLs.

**A BitTorrent task has no speed:** Check connectivity, task status, peer availability, and firewall rules. Current NAT tools inspect network status; automatic NAT traversal remains on the roadmap.

**RSS did not add a task:** Confirm the feed is reachable and check whether its updates match your automatic download rules. Options vary by release.

Report problems in [OpenNet Issues](https://github.com/hoshiizumiya/OpenNet/issues). Include OpenNet and Windows versions, architecture, reproduction steps, expected and actual results, and sanitized logs. Do not upload passwords, tokens, or personal paths.
