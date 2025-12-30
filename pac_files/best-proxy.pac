function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.230.1.108:14070",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 72.10.160.173:14533",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 47.83.23.2:1122",
        "SOCKS 67.43.236.19:21085",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 115.127.180.98:2589",
        "SOCKS 45.6.15.119:18194",
        "SOCKS 135.181.203.208:80",
        "SOCKS 109.168.173.173:1080",
        "SOCKS 213.195.244.71:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}