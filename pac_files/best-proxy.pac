function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.230.194.18:1111",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 103.143.197.218:8000",
        "SOCKS 72.10.160.94:23005",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 67.43.228.252:1447",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 89.58.45.94:33259",
        "SOCKS 45.238.56.17:8080",
        "SOCKS 89.58.45.94:56981",
        "SOCKS 36.147.78.166:80",
        "SOCKS 116.80.63.162:3172",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 192.145.228.226:8083",
        "SOCKS 170.0.11.11:8080",
        "SOCKS 189.195.139.178:999",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 201.88.213.118:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}