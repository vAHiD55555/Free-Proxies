function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.233.78.142:42495",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 200.114.81.219:8080",
        "SOCKS 72.50.33.170:999",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 89.58.45.94:55693",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 89.58.45.94:15067",
        "SOCKS 89.58.45.94:20952",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 175.24.2.65:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}