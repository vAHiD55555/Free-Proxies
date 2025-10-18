function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 179.96.28.58:80",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 89.58.45.94:44718",
        "SOCKS 185.93.89.147:14299",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 185.93.89.179:4303",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 67.43.236.21:8561",
        "SOCKS 185.93.89.163:9055",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 185.93.89.187:8088",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 185.93.89.145:5344",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 205.185.116.159:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}