function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.237.104.203:3128",
        "SOCKS 103.147.246.105:6060",
        "SOCKS 185.93.89.169:9320",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.93.89.171:9621",
        "SOCKS 47.239.212.82:1122",
        "SOCKS 185.93.89.180:8001",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 107.175.61.184:1080",
        "SOCKS 104.37.175.200:22292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}