function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.93:26713",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 218.31.88.85:11889",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 92.58.181.171:7575",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 157.180.121.252:46206",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}