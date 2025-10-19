function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 165.227.104.122:48500",
        "SOCKS 198.187.28.220:8080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 8.219.160.198:1011",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 72.10.160.92:12137",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 202.137.14.57:8085",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 173.208.144.39:18003",
        "SOCKS 170.233.30.33:4153",
        "SOCKS 185.93.89.155:11011",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 54.90.159.174:9501",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}