function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.49.222:7302",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 37.120.162.180:10000",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 37.120.162.180:31415",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 36.255.98.180:8199",
        "SOCKS 35.180.188.216:80",
        "SOCKS 37.120.162.180:34925",
        "SOCKS 103.133.27.11:8080",
        "SOCKS 5.199.173.4:9116",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}