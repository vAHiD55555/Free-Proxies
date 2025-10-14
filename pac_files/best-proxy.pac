function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.27.14.220:8561",
        "SOCKS 103.82.22.43:10001",
        "SOCKS 47.79.43.52:1122",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 190.102.233.100:999",
        "SOCKS 69.49.234.59:55781",
        "SOCKS 152.53.194.55:21085",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 46.146.210.123:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 47.243.59.250:3356",
        "SOCKS 221.202.27.194:10806",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 185.93.89.143:4091",
        "SOCKS 202.5.46.17:6969",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 185.130.226.55:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}