function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 198.199.86.11:1080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 27.79.212.108:16000",
        "SOCKS 183.81.101.66:16000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 8.219.97.248:80",
        "SOCKS 183.80.8.212:16000",
        "SOCKS 34.131.101.112:3128",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 89.58.45.94:43476",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}