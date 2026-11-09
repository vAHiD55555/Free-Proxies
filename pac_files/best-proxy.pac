function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 135.181.79.187:40001",
        "SOCKS 46.161.49.174:10808",
        "SOCKS 185.250.249.181:8443",
        "SOCKS 212.73.134.234:7777",
        "SOCKS 45.74.31.47:5965",
        "SOCKS 45.74.31.42:5785",
        "SOCKS 69.174.54.141:10805",
        "SOCKS 107.150.41.226:10685",
        "SOCKS 45.74.31.40:7777",
        "SOCKS 178.78.7.228:1080",
        "SOCKS 45.74.31.42:6907",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 8.211.142.15:1080",
        "SOCKS 38.255.17.95:1080",
        "SOCKS 107.174.30.94:1080",
        "SOCKS 217.60.97.34:1080",
        "SOCKS 91.151.95.231:1080",
        "SOCKS 93.99.104.210:1080",
        "SOCKS 45.74.31.40:8239",
        "SOCKS 109.172.55.177:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}