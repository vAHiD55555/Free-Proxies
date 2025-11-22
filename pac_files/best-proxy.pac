function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.237.14.92:4216",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 147.75.34.74:10086",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 47.237.113.119:8081",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 103.151.30.133:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 72.10.160.94:28203",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 130.193.57.247:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 103.242.175.241:8899",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}