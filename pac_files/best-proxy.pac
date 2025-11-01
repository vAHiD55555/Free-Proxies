function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.62.50:1088",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 157.175.197.28:8819",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 41.32.39.7:3128",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 115.127.80.1:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}