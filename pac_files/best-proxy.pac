function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.202.94.235:9064",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 178.170.43.106:8081",
        "SOCKS 124.248.184.144:1080",
        "SOCKS 217.77.102.18:3128",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 104.248.59.38:80",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 90.156.229.56:1234",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 152.53.171.242:13533",
        "SOCKS 152.53.171.242:14949",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 200.59.191.235:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}