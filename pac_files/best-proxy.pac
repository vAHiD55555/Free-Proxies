function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 141.94.104.205:48452",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 139.99.238.95:8080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 47.238.60.156:3128",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 38.194.246.34:999",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 121.132.61.211:3128",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 43.229.79.217:3128",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 13.212.76.113:9298",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}