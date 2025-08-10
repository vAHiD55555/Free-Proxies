function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.209.255.114:20172",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 190.217.19.185:999",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 103.112.53.211:6314",
        "SOCKS 92.118.169.34:3129",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 43.153.43.58:31280",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 115.72.15.81:10005",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 116.98.178.182:1029",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 139.59.228.95:8118",
        "SOCKS 1.53.92.155:16000",
        "SOCKS 103.82.22.5:10007",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 45.89.28.226:12915",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}