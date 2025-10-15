function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.40.178.254:9095",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 82.223.165.28:62284",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 179.96.28.58:80",
        "SOCKS 47.83.23.2:1122",
        "SOCKS 157.20.252.97:8097",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 41.173.7.82:8080",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 47.76.81.34:1100",
        "SOCKS 182.253.109.234:8080",
        "SOCKS 72.10.160.92:12137",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 185.112.224.151:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}