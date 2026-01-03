function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.110:5566",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 43.167.233.217:6006",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 43.167.158.61:6006",
        "SOCKS 43.167.216.94:6006",
        "SOCKS 43.167.223.111:6006",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 176.102.33.215:4080",
        "SOCKS 139.59.7.217:36590",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}