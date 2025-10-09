function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.93:30557",
        "SOCKS 222.59.173.105:44076",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 103.109.212.85:8428",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 221.202.27.194:10806",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 72.10.160.174:8097",
        "SOCKS 103.171.182.229:8080",
        "SOCKS 185.93.89.180:4083",
        "SOCKS 47.79.94.78:1122",
        "SOCKS 182.160.105.46:14157",
        "SOCKS 171.249.163.170:1452",
        "SOCKS 222.59.173.105:44027",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 81.90.149.188:3128",
        "SOCKS 187.1.170.97:8088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}