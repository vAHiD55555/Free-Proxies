function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.253.162:4857",
        "SOCKS 91.144.45.166:8082",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 194.87.77.22:80",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 72.10.160.173:14533",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 136.118.15.230:8000",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 120.77.203.0:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}