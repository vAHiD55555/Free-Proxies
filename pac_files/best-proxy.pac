function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.240.207:16379",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 136.118.15.230:8000",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 72.10.160.90:21963",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 51.16.209.246:8080",
        "SOCKS 115.127.181.6:2589",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 212.34.135.52:5555",
        "SOCKS 13.231.159.110:29799",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 121.42.9.57:7201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}