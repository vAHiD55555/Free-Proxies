function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.15.160.116:1080",
        "SOCKS 5.75.168.247:8020",
        "SOCKS 91.84.125.92:1080",
        "SOCKS 185.21.141.238:1080",
        "SOCKS 103.248.47.230:1080",
        "SOCKS 168.119.153.216:8888",
        "SOCKS 150.230.194.118:555",
        "SOCKS 120.220.197.196:59999",
        "SOCKS 138.124.26.19:1080",
        "SOCKS 213.176.16.10:1080",
        "SOCKS 103.228.171.47:8118",
        "SOCKS 125.24.156.113:7080",
        "SOCKS 147.15.17.132:1088",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 218.95.39.111:59999",
        "SOCKS 69.55.49.177:38182",
        "SOCKS 5.189.153.6:10116",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 218.95.39.27:59999",
        "SOCKS 111.67.103.90:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}