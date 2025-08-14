function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.188:57114",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 45.230.170.30:999",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 91.84.99.28:80",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 203.162.13.26:6868",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 113.177.129.154:8118",
        "SOCKS 45.115.236.15:1080",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 89.19.175.122:8008",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 115.72.45.0:10001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}