function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.75.211.222:4145",
        "SOCKS 115.127.107.106:1080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 89.108.83.137:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 128.140.76.145:14232",
        "SOCKS 198.23.189.151:8118",
        "SOCKS 67.43.228.253:20411",
        "SOCKS 196.204.83.232:1981",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 85.143.254.38:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}