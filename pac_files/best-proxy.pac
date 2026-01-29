function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.203:4060",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 62.60.131.204:19543",
        "SOCKS 62.60.131.205:5204",
        "SOCKS 171.254.94.125:8088",
        "SOCKS 62.60.131.205:4859",
        "SOCKS 62.60.131.204:5003",
        "SOCKS 72.10.160.92:26103",
        "SOCKS 62.60.131.203:4189",
        "SOCKS 62.60.131.253:4081",
        "SOCKS 203.76.98.21:45958",
        "SOCKS 103.145.46.79:1452",
        "SOCKS 62.60.131.253:5124",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 88.99.30.237:5062",
        "SOCKS 36.255.98.154:4251",
        "SOCKS 46.146.220.247:1080",
        "SOCKS 62.60.131.204:6433",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}