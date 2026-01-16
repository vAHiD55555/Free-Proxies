function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.114.53.2:8080",
        "SOCKS 36.255.98.167:4710",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 223.151.55.58:8009",
        "SOCKS 120.77.203.0:443",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 103.189.218.83:6969",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 3.24.178.81:80",
        "SOCKS 159.8.114.37:80",
        "SOCKS 139.59.24.173:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}