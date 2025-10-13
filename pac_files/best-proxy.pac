function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 170.0.228.250:999",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 194.145.200.184:3128",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 67.43.236.22:20051",
        "SOCKS 72.10.160.172:5699",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 199.188.207.170:8080",
        "SOCKS 95.0.90.242:8080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 178.17.62.152:8881",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}