function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:32942",
        "SOCKS 5.189.160.163:9100",
        "SOCKS 78.109.137.53:1080",
        "SOCKS 45.74.31.30:5114",
        "SOCKS 128.199.37.92:1080",
        "SOCKS 45.74.31.42:4209",
        "SOCKS 45.74.31.42:4277",
        "SOCKS 116.236.146.234:4145",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 49.13.22.249:10811",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 185.210.85.26:56981",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 49.13.22.249:10801",
        "SOCKS 45.82.161.54:1080",
        "SOCKS 45.74.31.42:6587",
        "SOCKS 113.249.111.67:1080",
        "SOCKS 45.74.31.42:4347",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 212.48.134.145:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}