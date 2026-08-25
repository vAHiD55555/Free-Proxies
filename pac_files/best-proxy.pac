function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:20748",
        "SOCKS 129.153.71.186:80",
        "SOCKS 45.74.31.42:11109",
        "SOCKS 45.74.31.42:10808",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 176.37.107.86:11111",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 161.97.129.202:9060",
        "SOCKS 45.74.31.42:9002",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 118.145.141.251:44141",
        "SOCKS 47.88.94.79:1080",
        "SOCKS 45.74.31.42:8204",
        "SOCKS 45.74.31.30:8642",
        "SOCKS 77.238.237.253:41414",
        "SOCKS 149.248.38.229:10800",
        "SOCKS 45.74.31.30:20076",
        "SOCKS 31.130.132.156:9050",
        "SOCKS 79.111.118.99:1080",
        "SOCKS 185.213.91.24:9100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}