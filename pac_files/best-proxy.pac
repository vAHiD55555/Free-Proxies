function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.71.131.131:1080",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 23.137.105.63:10890",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 23.137.105.63:24508",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 157.180.121.252:41679",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 200.24.146.97:8080",
        "SOCKS 51.38.230.146:80",
        "SOCKS 38.54.1.17:8888",
        "SOCKS 120.77.203.0:443",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 152.53.36.101:39977",
        "SOCKS 117.74.65.207:443",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 169.155.48.155:3128",
        "SOCKS 141.94.104.205:48452",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}