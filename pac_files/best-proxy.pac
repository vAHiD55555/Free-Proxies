function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.98.211:16379",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 67.43.236.18:10817",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 202.62.42.92:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 8.212.157.10:8080",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 202.40.184.54:64564",
        "SOCKS 82.223.165.28:9526",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 141.94.104.205:48452",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}