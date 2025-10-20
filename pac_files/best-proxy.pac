function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 23.251.62.210:10080",
        "SOCKS 160.19.18.99:8080",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 8.219.178.111:1111",
        "SOCKS 116.80.44.57:3172",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 185.93.89.183:11011",
        "SOCKS 103.139.126.211:8080",
        "SOCKS 45.179.246.65:999",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 185.93.89.183:11881",
        "SOCKS 173.44.175.226:3128",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 47.84.36.108:33333",
        "SOCKS 185.93.89.183:15567",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 188.93.213.242:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}