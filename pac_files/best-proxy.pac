function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.75.126.150:57328",
        "SOCKS 201.88.213.118:8080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 157.180.121.252:10073",
        "SOCKS 14.99.215.106:80",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 40.192.38.216:5678",
        "SOCKS 103.161.69.17:2698",
        "SOCKS 89.58.45.94:43283",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 89.58.45.94:38785",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 69.49.234.59:55804",
        "SOCKS 177.91.128.8:8080",
        "SOCKS 157.180.121.252:23613",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}