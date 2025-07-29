function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.74.65.207:443",
        "SOCKS 179.96.28.58:80",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 41.143.86.145:8080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 67.43.228.254:6535",
        "SOCKS 27.79.204.174:16000",
        "SOCKS 128.90.145.67:8118",
        "SOCKS 94.136.188.78:4003",
        "SOCKS 47.251.43.115:33333",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 41.141.18.200:8080",
        "SOCKS 42.118.1.145:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}