function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.59.38:80",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 14.56.177.76:3128",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 61.72.110.24:3128",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 194.163.160.97:10808",
        "SOCKS 14.56.177.108:3128",
        "SOCKS 13.229.107.106:80",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 59.8.203.55:80",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 91.107.244.226:50161",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 185.194.217.97:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}