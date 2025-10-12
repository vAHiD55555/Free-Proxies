function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.90:1237",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 103.139.253.56:8080",
        "SOCKS 58.147.171.38:1122",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 82.200.235.134:19170",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 192.203.0.254:999",
        "SOCKS 103.247.13.203:8090",
        "SOCKS 135.181.203.208:80",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 45.70.202.161:999",
        "SOCKS 47.91.104.88:3128",
        "SOCKS 103.124.227.89:12445",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 202.136.88.210:11011",
        "SOCKS 222.59.173.105:44027",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 121.42.9.57:7201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}