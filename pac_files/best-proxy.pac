function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.6.105.152:4216",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 213.87.103.76:3128",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 156.254.6.229:3128",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 124.65.117.38:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}