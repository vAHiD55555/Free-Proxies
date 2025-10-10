function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.234.141.1:20499",
        "SOCKS 45.236.129.64:3128",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 211.143.79.108:3128",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 103.187.86.26:8080",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 151.80.147.171:3128",
        "SOCKS 103.72.89.27:8097",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 157.125.220.80:8080",
        "SOCKS 88.216.98.247:53983",
        "SOCKS 178.17.62.152:8881",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}