function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.76.188.69:8888",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.202.59.66:3128",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 115.127.178.54:2589",
        "SOCKS 72.10.160.173:14533",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 47.239.238.156:1100",
        "SOCKS 62.60.131.180:10069",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 115.127.36.190:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}