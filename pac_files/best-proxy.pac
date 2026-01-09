function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.222.241.8:42378",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 36.255.98.152:4224",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 119.81.71.27:80",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 18.141.177.23:80",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 147.83.77.10:3128",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}