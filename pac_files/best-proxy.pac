function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.230.8.61:1080",
        "SOCKS 177.11.49.41:1088",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 206.123.156.180:6588",
        "SOCKS 212.34.135.86:5000",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 165.154.162.230:1080",
        "SOCKS 213.35.110.67:10837",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 213.35.110.67:10806",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 47.83.199.137:58367",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 91.151.88.220:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}