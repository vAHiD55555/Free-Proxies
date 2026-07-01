function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.245.238.56:53",
        "SOCKS 113.176.118.150:1080",
        "SOCKS 185.121.13.73:1080",
        "SOCKS 110.235.247.206:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 125.227.45.183:5001",
        "SOCKS 178.208.88.28:1080",
        "SOCKS 157.66.26.151:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 140.82.59.192:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 89.188.76.72:1080",
        "SOCKS 130.61.179.77:1234",
        "SOCKS 104.234.138.86:8080",
        "SOCKS 165.227.211.170:9053",
        "SOCKS 43.247.132.185:1080",
        "SOCKS 89.40.233.13:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}