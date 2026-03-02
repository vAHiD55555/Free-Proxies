function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.17:15002",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 13.229.107.106:80",
        "SOCKS 146.235.19.84:10884",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 213.35.110.67:10880",
        "SOCKS 95.78.118.172:1080",
        "SOCKS 77.93.42.198:1080",
        "SOCKS 167.160.184.231:6005",
        "SOCKS 213.35.110.67:10919",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 110.232.86.221:1080",
        "SOCKS 146.235.19.84:10864",
        "SOCKS 173.212.237.43:43648",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}