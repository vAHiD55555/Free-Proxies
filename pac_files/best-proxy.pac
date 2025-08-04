function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.188:57114",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 212.110.188.211:34409",
        "SOCKS 35.234.154.79:10004",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 103.187.86.3:8182",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 128.199.20.45:8080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 8.218.96.249:1111",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 112.216.83.10:3128",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 8.208.94.223:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}