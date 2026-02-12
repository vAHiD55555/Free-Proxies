function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.24:20497",
        "SOCKS 72.10.160.173:10941",
        "SOCKS 123.54.197.18:20778",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 169.57.157.148:80",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 27.124.9.8:5555",
        "SOCKS 123.54.197.25:20468",
        "SOCKS 37.16.74.14:24626",
        "SOCKS 123.54.197.21:22802",
        "SOCKS 123.54.197.52:20280",
        "SOCKS 202.152.44.19:8081",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 37.16.74.14:24201",
        "SOCKS 123.54.197.24:22055",
        "SOCKS 5.101.0.233:3128",
        "SOCKS 123.54.197.25:21185",
        "SOCKS 123.54.197.50:22993",
        "SOCKS 123.54.197.52:22953",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}