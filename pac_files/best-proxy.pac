function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.76:4145",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 8.217.151.114:1111",
        "SOCKS 8.208.94.223:3128",
        "SOCKS 70.36.109.21:60009",
        "SOCKS 193.151.129.143:8080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 18.179.46.106:999",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 89.46.249.252:8765",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 192.227.140.120:8888",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 67.43.228.253:13271",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}