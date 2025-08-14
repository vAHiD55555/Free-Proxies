function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.227.224.110:9051",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 46.229.66.241:1080",
        "SOCKS 116.98.186.107:1010",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 190.119.160.29:56160",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 8.222.131.12:33333",
        "SOCKS 72.10.160.92:3709",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}