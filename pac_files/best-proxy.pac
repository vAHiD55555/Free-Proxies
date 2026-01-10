function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 200.150.64.126:8080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 175.99.220.171:80",
        "SOCKS 120.77.203.0:443",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 38.54.9.151:20000",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 91.211.115.127:1080",
        "SOCKS 205.185.116.159:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}