function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.233.254.9:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 103.126.87.181:7777",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 65.108.159.129:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}