function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.49.87.3:80",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 50.112.100.138:80",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 173.209.63.69:8111",
        "SOCKS 190.217.19.185:999",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 135.181.203.208:80",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 212.110.188.205:34403",
        "SOCKS 5.190.36.2:3128",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 79.121.102.227:8080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 114.80.36.171:3081",
        "SOCKS 110.74.195.34:25",
        "SOCKS 13.212.216.15:52638",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}