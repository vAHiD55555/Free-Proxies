function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.228.154.82:4001",
        "SOCKS 212.110.188.219:34408",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 212.110.188.205:34403",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 67.43.236.22:29979",
        "SOCKS 159.89.98.131:3128",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 61.49.87.3:80",
        "SOCKS 27.79.248.75:16000",
        "SOCKS 188.165.220.50:62878",
        "SOCKS 188.166.104.152:49981",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}