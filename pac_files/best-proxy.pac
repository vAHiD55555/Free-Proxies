function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.180.123.229:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 103.82.20.76:8080",
        "SOCKS 5.45.119.70:1080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 182.253.109.133:1256",
        "SOCKS 103.6.235.13:5555",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 45.12.68.13:43925",
        "SOCKS 80.211.24.177:3128",
        "SOCKS 172.171.83.26:8080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 103.58.251.118:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 110.235.252.74:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 47.236.177.236:1080",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 82.9.133.51:9150",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}