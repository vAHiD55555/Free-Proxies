function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.33.162.89:58574",
        "SOCKS 119.100.148.2:7890",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 8.215.12.103:8448",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 168.228.44.66:999",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.210.156.30:12721",
        "SOCKS 165.101.230.170:7777",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 20.78.26.206:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}