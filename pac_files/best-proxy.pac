function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.213.141:4216",
        "SOCKS 103.155.196.158:8080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 23.137.105.63:14921",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 141.11.1.77:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 45.126.84.216:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 47.237.10.40:1011",
        "SOCKS 115.127.83.142:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}