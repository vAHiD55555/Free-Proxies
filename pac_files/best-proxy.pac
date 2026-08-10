function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.36.104.239:10808",
        "SOCKS 54.46.6.234:3129",
        "SOCKS 47.251.127.154:1080",
        "SOCKS 178.18.207.85:8888",
        "SOCKS 34.69.61.247:80",
        "SOCKS 45.79.203.254:48388",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 34.94.46.8:80",
        "SOCKS 163.61.70.4:9000",
        "SOCKS 202.40.190.74:1080",
        "SOCKS 212.113.99.167:10800",
        "SOCKS 204.168.225.55:8888",
        "SOCKS 194.163.174.78:1080",
        "SOCKS 188.92.28.76:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 38.253.88.242:999",
        "SOCKS 138.199.25.13:3908",
        "SOCKS 216.106.179.216:49163",
        "SOCKS 43.203.195.46:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}