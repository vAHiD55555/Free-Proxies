function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.179.151.158:9090",
        "SOCKS 45.74.31.41:11096",
        "SOCKS 45.74.31.47:11746",
        "SOCKS 46.72.251.3:1080",
        "SOCKS 45.74.31.47:4140",
        "SOCKS 171.245.71.217:1085",
        "SOCKS 45.192.197.165:5555",
        "SOCKS 37.32.43.137:1080",
        "SOCKS 150.241.105.252:1080",
        "SOCKS 92.42.102.253:1080",
        "SOCKS 45.74.31.47:11532",
        "SOCKS 38.60.157.33:1080",
        "SOCKS 45.74.31.47:5128",
        "SOCKS 8.220.204.92:4145",
        "SOCKS 185.125.230.19:1080",
        "SOCKS 45.74.31.47:8757",
        "SOCKS 45.74.31.40:7048",
        "SOCKS 45.74.31.42:7670",
        "SOCKS 45.74.31.30:8082",
        "SOCKS 103.151.75.21:2025",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}