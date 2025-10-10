function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 129.226.207.13:20201",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 211.143.79.108:3128",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 202.40.186.66:9090",
        "SOCKS 51.79.99.237:4601",
        "SOCKS 45.79.203.254:48388",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 103.72.89.27:8097",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 78.12.220.164:9174",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 103.134.220.122:1080",
        "SOCKS 187.111.144.102:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}