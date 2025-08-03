function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:7015",
        "SOCKS 170.130.202.134:3128",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 103.156.74.154:1111",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 65.108.251.40:11107",
        "SOCKS 159.224.213.97:8470",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 192.177.33.197:8000",
        "SOCKS 57.128.188.167:8220",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 152.53.194.55:21609",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}