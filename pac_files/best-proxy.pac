function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.221.245.167:1080",
        "SOCKS 40.192.27.104:8080",
        "SOCKS 8.209.249.89:3128",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 27.79.148.191:16000",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 154.236.177.102:1977",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 118.71.172.213:16000",
        "SOCKS 168.220.89.95:3128",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 103.82.36.237:8888",
        "SOCKS 20.27.11.248:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}