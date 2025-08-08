function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.82.135.154:8888",
        "SOCKS 157.66.16.38:8070",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 103.105.78.230:8080",
        "SOCKS 178.165.42.166:3128",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 36.93.8.34:11000",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 181.119.84.123:8080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 139.59.228.95:8118",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 95.47.239.65:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}