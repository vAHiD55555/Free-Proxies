function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.98.162.130:10001",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 147.75.34.105:443",
        "SOCKS 27.71.130.8:16000",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 47.237.12.0:1111",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 171.237.116.81:1002",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 103.190.120.98:30027",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}