function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.40:4145",
        "SOCKS 14.225.212.81:3128",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 157.66.16.63:8181",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 62.210.37.74:8012",
        "SOCKS 91.84.99.28:80",
        "SOCKS 110.74.195.34:25",
        "SOCKS 212.175.61.31:8080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 116.107.169.233:10001",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 182.253.109.5:8080",
        "SOCKS 188.120.245.247:12432",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}