function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 68.183.90.210:59166",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 62.60.131.179:5672",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 62.60.131.203:44323",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 185.118.51.163:3128",
        "SOCKS 115.127.179.6:6969",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 47.86.42.224:1122",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 37.59.110.73:80",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 120.132.97.88:7897",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}