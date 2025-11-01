function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.217.231.95:3356",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 72.10.160.94:31895",
        "SOCKS 47.245.81.38:1011",
        "SOCKS 88.222.244.151:3128",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 202.40.178.234:1080",
        "SOCKS 176.108.146.179:1080",
        "SOCKS 8.212.165.33:3333",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 8.243.68.10:8080",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}