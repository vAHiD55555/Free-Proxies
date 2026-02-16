function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.222.132:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 8.211.194.78:31433",
        "SOCKS 103.135.102.161:8081",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 163.5.128.116:14270",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 151.241.109.71:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 16.79.112.218:6666",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 192.241.156.17:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}