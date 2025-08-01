function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 52.191.222.212:8080",
        "SOCKS 65.108.251.40:11107",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 103.14.33.82:3128",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 181.79.83.79:999",
        "SOCKS 147.75.34.105:443",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 8.212.151.166:1081",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 212.110.188.204:34411",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}