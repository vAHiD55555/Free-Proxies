function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.110.114.116:8080",
        "SOCKS 103.249.201.50:60153",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 173.209.63.69:8111",
        "SOCKS 209.121.164.51:31147",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 64.225.70.191:8888",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 160.187.191.3:8082",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 103.109.57.42:3629",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}