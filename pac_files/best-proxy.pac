function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.98.211:16379",
        "SOCKS 78.140.46.48:1080",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 171.238.88.27:1072",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 45.32.94.217:8888",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 171.238.91.139:1092",
        "SOCKS 103.82.23.118:5178",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 103.239.23.133:3125",
        "SOCKS 51.15.5.21:60349",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}