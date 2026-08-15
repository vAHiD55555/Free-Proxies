function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.22.17.4:9988",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 45.38.210.105:9050",
        "SOCKS 216.106.179.216:49224",
        "SOCKS 109.236.57.144:1080",
        "SOCKS 43.156.84.41:10808",
        "SOCKS 45.10.41.194:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 118.69.186.75:1452",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 212.129.243.68:1143",
        "SOCKS 8.220.136.174:4567",
        "SOCKS 217.60.245.29:4080",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 47.82.68.249:1011",
        "SOCKS 171.253.95.241:1089",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 221.10.57.128:5138",
        "SOCKS 146.103.125.38:9054",
        "SOCKS 47.238.134.126:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}