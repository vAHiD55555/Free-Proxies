function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:21025",
        "SOCKS 138.68.21.132:40467",
        "SOCKS 36.64.181.82:8080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 152.53.171.242:31659",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 72.195.101.99:4145",
        "SOCKS 62.213.13.54:3128",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 47.237.70.144:1100",
        "SOCKS 152.53.36.101:18351",
        "SOCKS 213.136.92.199:5001",
        "SOCKS 152.53.171.242:50909",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 152.53.171.242:11001",
        "SOCKS 135.181.203.208:80",
        "SOCKS 152.53.171.242:24241",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 124.115.21.11:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}