function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 106.52.187.222:1080",
        "SOCKS 186.180.73.50:9090",
        "SOCKS 45.4.202.170:999",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 176.119.16.40:8534",
        "SOCKS 141.136.63.126:8080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 131.72.69.209:8080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 47.252.81.108:8118",
        "SOCKS 103.106.112.166:1234",
        "SOCKS 72.10.160.174:8097",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 47.79.94.191:1122",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}