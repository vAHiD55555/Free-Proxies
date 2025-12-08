function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.31.237:1080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 72.10.160.92:30095",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 35.180.188.216:80",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 202.5.37.104:17382",
        "SOCKS 98.94.230.151:8080",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 149.202.75.85:36666",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}