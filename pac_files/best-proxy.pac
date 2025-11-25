function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.94:4145",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 157.180.121.252:26017",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}