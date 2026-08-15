function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.249.20.169:9060",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 164.52.216.51:8080",
        "SOCKS 145.241.223.213:805",
        "SOCKS 8.219.229.53:111",
        "SOCKS 140.238.28.230:10808",
        "SOCKS 146.56.185.39:34500",
        "SOCKS 193.233.86.198:1080",
        "SOCKS 31.57.178.211:8080",
        "SOCKS 216.106.179.216:49273",
        "SOCKS 194.67.51.210:1080",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 199.38.169.219:8080",
        "SOCKS 38.54.50.148:1080",
        "SOCKS 81.70.62.145:15163",
        "SOCKS 171.253.95.241:1081",
        "SOCKS 45.10.42.68:1080",
        "SOCKS 107.152.36.15:8888",
        "SOCKS 109.200.111.171:1080",
        "SOCKS 160.22.17.4:9988",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}