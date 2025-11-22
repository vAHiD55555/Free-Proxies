function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.191.218.29:8199",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 117.74.65.207:443",
        "SOCKS 183.232.157.102:1100",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 177.234.217.236:999",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 135.181.203.208:80",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 149.202.75.85:36666",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}