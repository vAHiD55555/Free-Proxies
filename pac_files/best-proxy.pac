function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.230.1.108:14070",
        "SOCKS 72.10.160.91:6683",
        "SOCKS 43.250.54.139:60000",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 67.43.228.251:16681",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 152.53.171.242:31797",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 123.54.197.16:23136",
        "SOCKS 27.124.9.21:5555",
        "SOCKS 152.53.171.242:20235",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 116.102.242.52:20005",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 123.54.197.52:20559",
        "SOCKS 85.214.94.28:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}