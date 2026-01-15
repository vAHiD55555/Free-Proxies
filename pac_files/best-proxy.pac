function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.131:1020",
        "SOCKS 142.54.237.38:4145",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 62.60.131.178:8097",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 187.94.16.59:39665",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 47.83.228.1:1122",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 124.248.190.47:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}