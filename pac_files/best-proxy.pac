function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.236.187.104:40355",
        "SOCKS 44.251.173.250:368",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 67.43.236.21:11055",
        "SOCKS 182.160.109.166:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 176.108.146.179:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}