function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.80.32.8:3081",
        "SOCKS 185.191.236.162:3128",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 62.171.152.87:8888",
        "SOCKS 45.174.94.26:999",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 88.216.98.200:53983",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 103.109.212.85:8428",
        "SOCKS 218.1.211.2:1080",
        "SOCKS 47.79.95.169:1122",
        "SOCKS 67.43.236.21:32215",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 157.66.16.36:5568",
        "SOCKS 103.230.62.102:19201",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 194.145.200.184:3128",
        "SOCKS 113.160.37.152:53281",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}