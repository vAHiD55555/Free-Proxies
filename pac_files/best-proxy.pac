function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.203.139.209:5678",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 47.237.3.83:33333",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 89.58.45.94:19271",
        "SOCKS 89.58.45.94:10083",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 209.97.149.157:80",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 89.58.45.94:40683",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}