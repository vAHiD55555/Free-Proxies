function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.210.76.104:8561",
        "SOCKS 89.58.45.94:10039",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 37.221.193.221:27027",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 202.169.51.45:8080",
        "SOCKS 176.114.220.207:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 85.172.55.85:1080",
        "SOCKS 89.58.45.94:28231",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 8.218.99.137:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}