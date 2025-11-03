function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.132.222.15:8080",
        "SOCKS 47.238.168.172:1011",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 103.180.123.247:1452",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 43.229.79.217:3128",
        "SOCKS 103.153.136.10:8080",
        "SOCKS 72.10.160.92:26107",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 170.80.50.66:8080",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 47.76.123.104:8888",
        "SOCKS 135.181.203.208:80",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 183.164.226.253:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}