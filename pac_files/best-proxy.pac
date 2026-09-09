function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:4330",
        "SOCKS 47.79.33.142:3128",
        "SOCKS 123.0.24.154:9090",
        "SOCKS 43.106.60.21:1080",
        "SOCKS 111.67.103.162:1080",
        "SOCKS 194.164.22.24:8080",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 156.238.237.121:1080",
        "SOCKS 45.74.31.30:4346",
        "SOCKS 93.123.118.15:1080",
        "SOCKS 107.175.124.191:18080",
        "SOCKS 65.21.252.66:10808",
        "SOCKS 45.74.31.30:4232",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 45.74.31.42:5060",
        "SOCKS 62.60.210.173:1080",
        "SOCKS 45.74.31.42:4202",
        "SOCKS 103.136.106.13:1081",
        "SOCKS 103.134.220.49:1080",
        "SOCKS 151.185.59.41:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}