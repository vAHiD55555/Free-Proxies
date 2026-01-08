function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.79.80.224:3535",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 67.43.236.20:20867",
        "SOCKS 36.255.98.177:8443",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 47.239.61.82:9001",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 103.78.98.74:8888",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 89.46.249.143:13266",
        "SOCKS 40.177.106.156:8080",
        "SOCKS 115.127.178.42:2589",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 125.141.133.49:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}