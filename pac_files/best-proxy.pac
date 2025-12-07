function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 44.239.103.14:80",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 85.98.163.125:8080",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 188.126.85.122:8080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 15.206.25.229:80",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 8.218.99.137:1011",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 82.26.74.193:9004",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 176.126.103.194:44214",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}