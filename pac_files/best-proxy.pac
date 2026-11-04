function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:6847",
        "SOCKS 107.172.232.2:7890",
        "SOCKS 117.93.210.21:8989",
        "SOCKS 194.59.183.138:1080",
        "SOCKS 8.211.142.15:1080",
        "SOCKS 128.14.229.215:1080",
        "SOCKS 45.74.31.47:11526",
        "SOCKS 45.74.31.47:6159",
        "SOCKS 104.194.132.112:9053",
        "SOCKS 45.74.31.46:5092",
        "SOCKS 107.174.30.93:1080",
        "SOCKS 140.245.56.234:1080",
        "SOCKS 185.230.191.85:1080",
        "SOCKS 45.74.31.40:4327",
        "SOCKS 59.173.122.72:10808",
        "SOCKS 80.93.62.239:1080",
        "SOCKS 47.91.109.17:5060",
        "SOCKS 223.167.41.69:1314",
        "SOCKS 45.74.31.42:4128",
        "SOCKS 109.172.55.177:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}