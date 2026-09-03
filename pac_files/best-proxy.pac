function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.43.60.220:8080",
        "SOCKS 45.74.31.30:10531",
        "SOCKS 45.74.31.30:10541",
        "SOCKS 45.74.31.30:4579",
        "SOCKS 45.74.31.30:4088",
        "SOCKS 45.74.31.42:6398",
        "SOCKS 103.134.220.49:1080",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 45.74.31.30:8040",
        "SOCKS 36.33.1.106:43681",
        "SOCKS 202.91.41.102:1080",
        "SOCKS 45.74.31.42:7616",
        "SOCKS 95.211.174.135:3128",
        "SOCKS 45.74.31.30:4486",
        "SOCKS 45.74.31.30:36722",
        "SOCKS 203.189.152.79:1080",
        "SOCKS 43.106.60.21:1080",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 94.249.187.156:1080",
        "SOCKS 144.24.47.42:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}