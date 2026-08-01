function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 180.211.93.105:8080",
        "SOCKS 217.175.47.2:1080",
        "SOCKS 200.123.27.123:999",
        "SOCKS 113.160.188.21:1080",
        "SOCKS 47.250.159.65:9000",
        "SOCKS 47.250.159.65:1080",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 47.237.2.245:80",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 72.205.0.93:4145",
        "SOCKS 95.211.174.135:3128",
        "SOCKS 203.175.127.240:8080",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 204.152.192.13:1080",
        "SOCKS 220.158.234.84:1080",
        "SOCKS 37.191.95.202:80",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 47.237.2.245:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}