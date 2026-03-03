function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 203.76.98.21:45958",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 82.145.209.254:80",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 120.26.147.60:7890",
        "SOCKS 77.83.203.6:443",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 18.138.241.37:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}