function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 64.227.131.240:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 45.88.89.65:6666",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 72.10.160.171:23085",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 78.12.249.123:5344",
        "SOCKS 195.133.77.82:9963",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 161.35.82.57:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}