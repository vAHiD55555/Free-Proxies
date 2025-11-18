function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.180.121.252:47574",
        "SOCKS 152.53.171.242:45923",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 89.58.45.94:26279",
        "SOCKS 157.180.121.252:49719",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 89.58.45.94:28477",
        "SOCKS 89.58.45.94:59683",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 89.58.45.94:38629",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 161.49.116.131:1338",
        "SOCKS 89.58.45.94:28506",
        "SOCKS 152.53.171.242:12229",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 89.58.45.94:42891",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 51.15.223.12:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}