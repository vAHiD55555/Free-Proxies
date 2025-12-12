function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.144.74.156:3620",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 8.222.185.208:1111",
        "SOCKS 184.170.251.30:11288",
        "SOCKS 128.140.76.145:16251",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 3.35.14.139:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 179.96.28.58:80",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 113.160.188.21:1080",
        "SOCKS 128.140.76.145:28059",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 195.133.8.14:8080",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 139.59.225.188:12827",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}