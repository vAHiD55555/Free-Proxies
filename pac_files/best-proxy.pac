function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.242.163.28:21",
        "SOCKS 45.74.31.42:4789",
        "SOCKS 185.49.110.155:1080",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 104.156.151.10:1080",
        "SOCKS 118.70.151.55:1080",
        "SOCKS 45.74.31.42:5168",
        "SOCKS 185.246.217.234:9080",
        "SOCKS 43.155.204.231:1080",
        "SOCKS 87.120.219.117:1082",
        "SOCKS 45.74.31.30:5604",
        "SOCKS 45.74.31.42:5174",
        "SOCKS 47.250.159.65:11",
        "SOCKS 109.199.96.116:9050",
        "SOCKS 169.58.97.115:1080",
        "SOCKS 45.74.31.42:4277",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 45.74.31.30:4545",
        "SOCKS 45.74.31.30:4030",
        "SOCKS 47.250.177.202:199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}