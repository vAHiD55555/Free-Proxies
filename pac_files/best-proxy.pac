function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.38.140:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 47.237.92.3:1100",
        "SOCKS 67.43.228.252:21701",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 8.217.111.249:1011",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 159.224.213.97:8470",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 103.123.235.42:8080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 72.10.160.93:26517",
        "SOCKS 20.210.76.104:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}