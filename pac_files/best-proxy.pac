function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 177.234.194.31:999",
        "SOCKS 185.191.236.162:3128",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 179.96.28.58:80",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 157.125.220.80:8080",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 78.12.220.164:9174",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 88.216.98.247:53983",
        "SOCKS 72.10.160.174:8097",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 103.187.86.26:8080",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 207.254.28.68:2025",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}