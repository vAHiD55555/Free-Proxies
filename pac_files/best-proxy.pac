function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 8.218.99.137:3356",
        "SOCKS 8.218.99.137:1011",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 152.53.36.101:25977",
        "SOCKS 51.48.124.225:41",
        "SOCKS 40.172.232.213:8989",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 41.173.7.82:8080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 139.59.230.8:8080",
        "SOCKS 47.76.149.237:1011",
        "SOCKS 193.227.129.215:52203",
        "SOCKS 146.70.164.210:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 221.202.27.194:10809",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}