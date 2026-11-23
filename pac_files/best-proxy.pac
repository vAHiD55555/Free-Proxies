function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 94.228.245.213:1080",
        "SOCKS 98.159.100.100:1080",
        "SOCKS 45.134.39.140:3333",
        "SOCKS 49.13.22.249:10806",
        "SOCKS 98.159.100.114:1080",
        "SOCKS 95.84.137.189:1080",
        "SOCKS 66.151.41.133:1080",
        "SOCKS 37.232.218.12:1080",
        "SOCKS 135.136.188.213:1081",
        "SOCKS 45.74.31.41:4125",
        "SOCKS 45.74.31.40:4007",
        "SOCKS 144.202.107.194:9150",
        "SOCKS 193.168.172.108:1080",
        "SOCKS 24.121.73.10:1080",
        "SOCKS 103.124.172.134:1080",
        "SOCKS 69.174.54.108:18573",
        "SOCKS 95.154.64.140:2081",
        "SOCKS 45.74.31.47:20346",
        "SOCKS 78.135.77.247:9094",
        "SOCKS 179.185.14.157:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}