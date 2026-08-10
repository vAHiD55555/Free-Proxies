function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.81.56.193:8888",
        "SOCKS 115.127.53.114:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 120.133.82.62:44111",
        "SOCKS 212.113.99.167:10800",
        "SOCKS 144.31.189.114:1080",
        "SOCKS 8.215.112.34:7777",
        "SOCKS 89.169.37.254:1080",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 86.53.163.185:10002",
        "SOCKS 87.255.240.229:1080",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 116.104.53.221:1081",
        "SOCKS 193.233.199.21:1080",
        "SOCKS 217.175.47.2:1080",
        "SOCKS 194.163.174.78:1084",
        "SOCKS 147.45.60.246:1082",
        "SOCKS 160.22.200.60:69",
        "SOCKS 101.2.166.73:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}