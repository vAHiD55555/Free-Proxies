function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.138.145.204:1999",
        "SOCKS 185.179.188.54:1080",
        "SOCKS 65.21.252.66:10801",
        "SOCKS 69.87.216.54:7989",
        "SOCKS 45.32.160.61:1088",
        "SOCKS 132.243.168.30:9150",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 103.9.185.33:1080",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 23.95.91.240:49158",
        "SOCKS 49.13.22.249:10811",
        "SOCKS 62.60.210.173:1080",
        "SOCKS 176.192.41.172:4444",
        "SOCKS 202.160.76.167:1080",
        "SOCKS 103.239.52.100:1080",
        "SOCKS 79.111.118.99:1080",
        "SOCKS 149.248.21.106:8080",
        "SOCKS 178.156.147.172:40001",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 15.237.108.20:54588",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}