function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.17:15155",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 77.83.203.6:443",
        "SOCKS 103.82.23.118:6224",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 221.224.56.210:10013",
        "SOCKS 213.35.110.67:10896",
        "SOCKS 206.123.156.236:6148",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 58.19.55.17:15039",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 58.19.55.17:15275",
        "SOCKS 186.0.144.81:9797",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 35.180.188.216:80",
        "SOCKS 103.161.35.160:2080",
        "SOCKS 188.166.30.17:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}