function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.28.121.58:80",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 115.127.176.210:2589",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 183.88.231.188:34599",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 190.119.160.29:56160",
        "SOCKS 88.216.68.25:9079",
        "SOCKS 35.180.188.216:80",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 8.222.249.27:1145",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 139.59.225.188:12827",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}