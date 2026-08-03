function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.138.206.172:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 177.19.167.242:80",
        "SOCKS 38.58.76.8:999",
        "SOCKS 66.151.32.105:1080",
        "SOCKS 5.35.85.97:1080",
        "SOCKS 190.89.29.110:999",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 190.89.4.185:1080",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 120.132.97.88:7897",
        "SOCKS 77.239.96.194:1081",
        "SOCKS 77.95.201.16:9150",
        "SOCKS 136.248.65.104:1092",
        "SOCKS 121.101.129.72:3128",
        "SOCKS 110.49.66.210:8080",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 103.151.74.29:2025",
        "SOCKS 49.0.0.175:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}