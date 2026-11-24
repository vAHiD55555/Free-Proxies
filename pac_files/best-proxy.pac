function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.209.208.53:1080",
        "SOCKS 88.198.69.51:1100",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 83.234.137.154:1080",
        "SOCKS 116.48.170.221:11000",
        "SOCKS 45.74.31.41:4311",
        "SOCKS 90.151.38.60:1080",
        "SOCKS 147.45.77.92:1080",
        "SOCKS 77.51.9.150:1080",
        "SOCKS 45.74.31.42:12046",
        "SOCKS 45.74.31.42:4217",
        "SOCKS 212.87.198.145:1080",
        "SOCKS 45.74.31.46:4062",
        "SOCKS 195.239.17.185:1080",
        "SOCKS 82.9.133.51:9150",
        "SOCKS 140.245.56.234:1080",
        "SOCKS 45.74.31.41:4299",
        "SOCKS 35.244.38.184:8081",
        "SOCKS 45.74.31.46:4059",
        "SOCKS 210.245.52.136:2080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}