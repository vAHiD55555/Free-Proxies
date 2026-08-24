function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44197",
        "SOCKS 5.104.206.191:1080",
        "SOCKS 151.242.116.35:8080",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 45.38.143.77:10808",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 41.251.109.113:4080",
        "SOCKS 45.74.31.30:10800",
        "SOCKS 45.74.31.30:38821",
        "SOCKS 185.214.135.169:1080",
        "SOCKS 49.13.22.249:10811",
        "SOCKS 45.38.198.127:1080",
        "SOCKS 139.28.240.201:1082",
        "SOCKS 45.74.31.30:15770",
        "SOCKS 223.99.197.190:11012",
        "SOCKS 62.60.210.173:1080",
        "SOCKS 91.107.250.17:10808",
        "SOCKS 45.74.31.30:8463",
        "SOCKS 45.74.31.42:11074",
        "SOCKS 45.74.31.30:31676",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}