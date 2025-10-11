function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.228.169.61:1001",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 159.65.158.30:8888",
        "SOCKS 34.216.224.9:12542",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 179.57.215.99:999",
        "SOCKS 103.247.13.203:8090",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 103.139.253.56:8080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 62.255.223.195:8080",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 45.65.137.218:999",
        "SOCKS 121.42.9.57:7201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}