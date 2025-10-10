function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.140.113.110:3128",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 145.40.97.148:30000",
        "SOCKS 177.234.194.31:999",
        "SOCKS 67.43.236.21:32215",
        "SOCKS 45.174.94.26:999",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 47.250.177.202:80",
        "SOCKS 47.79.95.169:1122",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 200.35.50.89:3028",
        "SOCKS 45.124.15.90:8080",
        "SOCKS 72.10.164.178:2493",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}