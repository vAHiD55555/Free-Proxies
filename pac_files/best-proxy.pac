function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.93:26713",
        "SOCKS 115.72.170.23:10008",
        "SOCKS 47.91.121.127:8888",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 27.79.175.79:16000",
        "SOCKS 188.166.197.129:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}