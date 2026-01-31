function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.106.226:1088",
        "SOCKS 14.103.9.129:7890",
        "SOCKS 72.10.160.170:6303",
        "SOCKS 36.255.98.177:9494",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 36.255.98.167:4071",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 36.255.98.167:10805",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 36.255.98.167:4403",
        "SOCKS 134.199.192.3:3128",
        "SOCKS 210.75.240.178:4781",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 62.60.131.203:4444",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 85.214.94.28:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}