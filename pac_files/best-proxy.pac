function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.47:9044",
        "SOCKS 93.90.41.104:10808",
        "SOCKS 45.74.31.40:12317",
        "SOCKS 152.67.22.144:1080",
        "SOCKS 14.179.25.130:20000",
        "SOCKS 45.74.31.41:9553",
        "SOCKS 116.101.76.225:1118",
        "SOCKS 45.74.31.46:8659",
        "SOCKS 45.74.31.46:8083",
        "SOCKS 137.59.195.198:1080",
        "SOCKS 111.119.162.248:10950",
        "SOCKS 45.74.31.40:9835",
        "SOCKS 176.195.81.251:1080",
        "SOCKS 45.74.31.40:9787",
        "SOCKS 45.74.31.47:7550",
        "SOCKS 154.36.146.23:10000",
        "SOCKS 158.160.234.55:1080",
        "SOCKS 45.74.31.42:4984",
        "SOCKS 69.174.54.54:12603",
        "SOCKS 174.138.165.204:33381",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}