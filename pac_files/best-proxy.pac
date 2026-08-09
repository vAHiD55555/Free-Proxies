function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.233.79.120:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 15.235.172.212:65411",
        "SOCKS 31.25.236.95:1080",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 13.41.196.179:9002",
        "SOCKS 109.172.55.227:1082",
        "SOCKS 176.122.74.108:1080",
        "SOCKS 45.145.41.177:1080",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 45.59.124.51:10808",
        "SOCKS 194.87.10.38:1234",
        "SOCKS 194.163.174.78:1089",
        "SOCKS 20.83.140.251:8080",
        "SOCKS 46.17.99.217:1080",
        "SOCKS 116.48.170.221:11000",
        "SOCKS 102.0.14.42:1080",
        "SOCKS 84.201.144.65:10001",
        "SOCKS 47.236.177.236:1080",
        "SOCKS 221.176.85.230:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}