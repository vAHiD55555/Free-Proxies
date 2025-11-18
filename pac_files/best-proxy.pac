function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.155.120:41154",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 89.58.45.94:28274",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 89.58.45.94:31034",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 89.58.45.94:45553",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 47.76.249.160:1100",
        "SOCKS 89.58.45.94:37885",
        "SOCKS 89.46.249.252:8765",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 89.58.45.94:13496",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 182.53.202.208:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}