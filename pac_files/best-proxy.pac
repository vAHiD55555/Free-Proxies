function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.144.74.156:3620",
        "SOCKS 212.34.135.86:5000",
        "SOCKS 206.123.156.251:8000",
        "SOCKS 13.229.47.109:80",
        "SOCKS 37.157.217.144:10810",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 103.206.68.241:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 58.19.55.17:15274",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 77.83.203.6:443",
        "SOCKS 110.235.136.71:8081",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 206.123.156.228:7339",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 47.237.18.1:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}