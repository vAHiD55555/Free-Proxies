function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.25.208.163:1111",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 8.212.157.10:8080",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 182.253.215.158:8080",
        "SOCKS 43.225.151.30:1121",
        "SOCKS 180.123.86.215:8118",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 160.30.83.10:83",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 103.174.178.133:1020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}