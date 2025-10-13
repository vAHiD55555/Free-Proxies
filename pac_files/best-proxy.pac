function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.210.37.74:8012",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 179.96.28.58:80",
        "SOCKS 185.246.90.213:1080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 52.47.164.226:9304",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 94.156.236.87:1080",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 188.227.224.110:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}