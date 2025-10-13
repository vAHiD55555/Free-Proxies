function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 200.85.167.254:8080",
        "SOCKS 46.172.36.213:8080",
        "SOCKS 185.130.226.55:1080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 27.147.215.56:13457",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 78.12.249.123:8026",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 107.152.45.72:8888",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 8.212.165.33:3333",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 8.211.200.183:9098",
        "SOCKS 45.22.209.157:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}