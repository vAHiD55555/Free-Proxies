function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:27215",
        "SOCKS 103.169.255.194:8080",
        "SOCKS 37.221.193.221:23223",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 47.238.34.52:1011",
        "SOCKS 157.180.121.252:14424",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 212.175.61.31:8080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 67.43.228.254:11567",
        "SOCKS 176.107.80.91:1080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 89.58.45.94:45541",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 47.98.190.236:8002",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 202.5.60.46:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}