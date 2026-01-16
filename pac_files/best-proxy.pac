function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.239.86.248:3128",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 37.120.162.180:45892",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 62.60.131.181:9504",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 78.12.223.246:2724",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 68.235.35.171:3128",
        "SOCKS 121.230.9.42:1080",
        "SOCKS 47.98.190.236:8002",
        "SOCKS 176.113.73.102:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}