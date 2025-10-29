function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.65.117.38:7302",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 123.108.111.59:8080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 8.217.34.2:1011",
        "SOCKS 120.77.203.0:443",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 103.126.174.187:8080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 141.94.195.25:25043",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 35.183.64.191:30309",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}