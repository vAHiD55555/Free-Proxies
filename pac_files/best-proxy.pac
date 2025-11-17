function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.180.197.253:2025",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 180.191.59.56:8081",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 42.96.5.254:22883",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 89.58.45.94:10008",
        "SOCKS 157.15.144.80:8080",
        "SOCKS 158.101.113.18:80",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 161.49.87.222:8095",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 89.58.45.94:15867",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 31.193.193.69:1488",
        "SOCKS 47.251.87.199:9098",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}