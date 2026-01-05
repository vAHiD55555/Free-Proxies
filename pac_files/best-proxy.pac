function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.159.43:39019",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 116.203.139.209:3128",
        "SOCKS 203.189.137.127:1080",
        "SOCKS 202.62.59.216:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 192.252.214.17:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}