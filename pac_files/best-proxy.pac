function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 175.24.2.65:1080",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 103.249.201.50:60153",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}