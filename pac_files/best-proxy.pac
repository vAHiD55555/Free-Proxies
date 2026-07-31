function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.109.176.0:2080",
        "SOCKS 201.139.115.206:8081",
        "SOCKS 8.221.126.184:80",
        "SOCKS 47.91.29.151:3128",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 62.106.66.174:143",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 136.248.65.104:1088",
        "SOCKS 171.240.67.66:8080",
        "SOCKS 144.217.12.20:10808",
        "SOCKS 194.163.174.78:1087",
        "SOCKS 47.82.112.38:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 58.187.192.47:1080",
        "SOCKS 47.252.11.233:9080",
        "SOCKS 37.204.230.182:1080",
        "SOCKS 159.65.45.169:1080",
        "SOCKS 103.169.254.155:1080",
        "SOCKS 23.175.248.21:1080",
        "SOCKS 139.162.36.238:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}