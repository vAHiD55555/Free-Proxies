function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.140.113.110:3128",
        "SOCKS 95.47.239.75:3128",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 165.227.104.238:8118",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 129.226.207.13:20201",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 192.252.220.92:17328",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 202.154.19.165:8080",
        "SOCKS 118.99.96.174:8080",
        "SOCKS 47.79.95.122:1122",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 180.149.232.153:61245",
        "SOCKS 47.79.93.202:1122",
        "SOCKS 85.192.63.38:8118",
        "SOCKS 49.81.40.7:1001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}