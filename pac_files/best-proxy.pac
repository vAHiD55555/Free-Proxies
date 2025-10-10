function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.199.202.122:1080",
        "SOCKS 185.93.89.144:4373",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 47.79.20.192:1100",
        "SOCKS 171.249.163.170:1452",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 103.82.135.154:8888",
        "SOCKS 47.76.169.110:8888",
        "SOCKS 188.121.117.214:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 103.250.69.190:1519",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 185.203.238.120:3128",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 62.171.152.87:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}