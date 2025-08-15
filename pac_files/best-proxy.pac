function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:7015",
        "SOCKS 47.90.205.231:33333",
        "SOCKS 178.18.244.8:8888",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 103.191.155.70:8080",
        "SOCKS 171.237.85.65:1001",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 31.14.114.67:1081",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 117.74.65.207:443",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 192.177.139.119:8000",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 195.158.8.123:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}