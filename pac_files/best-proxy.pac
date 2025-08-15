function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.74.125.18:8888",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 94.73.239.124:55443",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 65.108.203.37:18080",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 103.123.168.202:3932",
        "SOCKS 18.188.141.177:8834",
        "SOCKS 116.107.173.169:10001",
        "SOCKS 222.129.36.92:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}