function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.4.192.62:7302",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 123.54.197.53:20938",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 123.54.197.16:22732",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 213.35.110.67:10837",
        "SOCKS 123.54.197.51:21989",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 13.229.107.106:80",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 123.54.197.25:20113",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 123.54.197.19:23764",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 51.75.126.150:57328",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}