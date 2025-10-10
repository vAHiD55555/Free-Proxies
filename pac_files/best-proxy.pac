function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.79.94.72:1122",
        "SOCKS 92.113.150.5:1080",
        "SOCKS 47.239.10.156:1100",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 209.141.57.216:80",
        "SOCKS 67.43.236.22:1549",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 202.179.69.216:58080",
        "SOCKS 103.108.60.141:1080",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 24.172.82.94:53281",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 176.9.164.117:60019",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}