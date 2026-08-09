function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.69.61.247:80",
        "SOCKS 91.107.176.117:9088",
        "SOCKS 95.105.28.76:1080",
        "SOCKS 217.175.47.2:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 176.120.28.106:8080",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 160.187.1.225:9050",
        "SOCKS 202.62.52.120:1080",
        "SOCKS 147.45.72.212:44816",
        "SOCKS 42.115.173.141:3128",
        "SOCKS 140.82.16.82:1080",
        "SOCKS 216.173.68.36:1080",
        "SOCKS 192.163.200.93:17071",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 5.252.177.241:9050",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 216.106.179.216:49163",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}