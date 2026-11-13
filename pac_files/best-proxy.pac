function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.174.54.186:12691",
        "SOCKS 45.74.31.40:13068",
        "SOCKS 45.74.31.46:17154",
        "SOCKS 174.138.165.210:36169",
        "SOCKS 64.227.173.90:11080",
        "SOCKS 103.151.75.21:2025",
        "SOCKS 46.72.251.3:1080",
        "SOCKS 46.4.85.245:444",
        "SOCKS 31.56.78.41:1080",
        "SOCKS 194.150.232.104:1059",
        "SOCKS 158.247.224.147:1080",
        "SOCKS 45.74.31.42:7619",
        "SOCKS 49.51.233.28:1080",
        "SOCKS 80.64.27.68:1080",
        "SOCKS 5.175.174.8:1080",
        "SOCKS 96.60.107.42:9050",
        "SOCKS 45.74.31.46:14650",
        "SOCKS 31.41.227.175:1080",
        "SOCKS 194.61.120.238:1080",
        "SOCKS 77.73.14.147:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}