function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 209.38.83.56:1088",
        "SOCKS 27.72.100.236:4996",
        "SOCKS 185.93.89.158:5509",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 185.93.89.144:11751",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 89.58.45.94:25585",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 185.93.89.182:8880",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 8.219.93.90:33333",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 185.93.89.180:8187",
        "SOCKS 103.153.34.2:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}