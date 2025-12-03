function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.151.88.220:6618",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 103.86.131.62:80",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 67.43.236.19:6787",
        "SOCKS 103.82.23.118:5178",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}