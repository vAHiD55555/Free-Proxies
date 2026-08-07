function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 70.166.65.160:4145",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 45.79.203.254:48388",
        "SOCKS 212.113.99.167:10800",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 8.213.128.6:87",
        "SOCKS 103.6.235.13:5555",
        "SOCKS 103.167.156.86:8083",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 8.217.112.43:1011",
        "SOCKS 103.121.120.242:1080",
        "SOCKS 46.173.26.104:1080",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 49.0.0.175:1080",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 14.238.8.63:9090",
        "SOCKS 175.27.250.85:44158",
        "SOCKS 175.27.250.85:44142",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 113.160.132.26:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}