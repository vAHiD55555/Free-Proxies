function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 152.53.171.242:14981",
        "SOCKS 47.239.133.193:1011",
        "SOCKS 15.160.186.74:521",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 185.93.89.183:9001",
        "SOCKS 8.219.77.28:1100",
        "SOCKS 202.5.59.97:6969",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 8.219.178.111:1100",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 89.58.45.94:33594",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 89.58.45.94:10002",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 141.98.112.161:61337",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 67.43.228.250:16043",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}