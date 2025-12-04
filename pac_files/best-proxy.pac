function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.123.62:2555",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 144.31.0.47:10808",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 201.217.28.203:88",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 67.43.236.18:17781",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}