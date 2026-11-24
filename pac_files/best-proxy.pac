function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.253.1.65:10808",
        "SOCKS 95.181.160.37:1080",
        "SOCKS 4.157.29.42:3001",
        "SOCKS 116.96.36.148:1076",
        "SOCKS 195.190.121.154:1080",
        "SOCKS 45.135.148.101:1080",
        "SOCKS 51.159.149.245:80",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 45.74.31.47:8263",
        "SOCKS 178.237.185.114:1080",
        "SOCKS 174.138.165.205:52233",
        "SOCKS 109.248.5.149:10808",
        "SOCKS 58.186.169.160:1090",
        "SOCKS 185.47.55.110:1080",
        "SOCKS 69.174.54.143:19974",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 171.245.71.144:1092",
        "SOCKS 45.74.31.47:4333",
        "SOCKS 143.198.90.221:1088",
        "SOCKS 62.83.34.87:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}