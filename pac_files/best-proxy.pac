function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 151.241.100.234:1080",
        "SOCKS 69.174.54.239:14562",
        "SOCKS 45.74.31.46:15629",
        "SOCKS 42.114.69.177:20001",
        "SOCKS 45.74.31.40:4444",
        "SOCKS 69.174.54.148:17055",
        "SOCKS 84.201.144.65:10007",
        "SOCKS 79.140.20.159:1080",
        "SOCKS 49.13.22.249:10803",
        "SOCKS 176.65.140.201:8080",
        "SOCKS 23.239.30.204:1088",
        "SOCKS 58.187.44.85:1080",
        "SOCKS 147.45.60.246:1082",
        "SOCKS 216.234.216.39:1080",
        "SOCKS 185.121.133.189:1080",
        "SOCKS 176.114.199.202:1080",
        "SOCKS 45.76.13.121:49995",
        "SOCKS 109.176.229.221:1080",
        "SOCKS 195.211.124.50:1080",
        "SOCKS 45.74.31.47:4160",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}