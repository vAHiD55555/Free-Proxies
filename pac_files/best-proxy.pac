function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.153.141.90:4216",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 196.204.83.237:1976",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 147.75.34.105:443",
        "SOCKS 217.76.55.8:8888",
        "SOCKS 103.250.70.14:1120",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 18.140.56.192:3128",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 185.248.101.52:60005",
        "SOCKS 89.39.83.204:80",
        "SOCKS 164.92.119.198:1080",
        "SOCKS 18.191.200.48:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}