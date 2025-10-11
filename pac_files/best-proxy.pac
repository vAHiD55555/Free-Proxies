function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 177.36.64.129:54003",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 176.9.164.117:60019",
        "SOCKS 211.230.49.122:3128",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 1.10.141.115:8080",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 171.228.166.129:1001",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 95.47.239.65:3128",
        "SOCKS 119.93.9.125:8082",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 14.234.140.181:20399",
        "SOCKS 72.10.160.173:24063",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}