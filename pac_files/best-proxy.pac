function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.221.245.167:1080",
        "SOCKS 47.91.121.127:8888",
        "SOCKS 103.249.201.50:60153",
        "SOCKS 20.13.34.208:8118",
        "SOCKS 192.177.139.23:8000",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 47.76.245.182:8888",
        "SOCKS 135.181.203.208:80",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 173.209.63.68:8037",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 157.66.84.24:1983",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 139.59.1.14:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}