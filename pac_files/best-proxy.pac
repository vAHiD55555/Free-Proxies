function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.154.118.154:57413",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 45.115.236.15:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 45.91.201.100:8081",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 149.86.146.62:8080",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 209.14.98.5:8080",
        "SOCKS 8.212.168.170:9080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}