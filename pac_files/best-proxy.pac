function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.223.12:16379",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 202.62.52.35:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 202.62.62.51:1080",
        "SOCKS 185.222.162.11:8080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 120.77.203.0:443",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 165.227.174.249:33080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}