function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 155.212.170.93:10808",
        "SOCKS 45.88.0.116:3128",
        "SOCKS 36.255.98.169:6410",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 36.255.98.178:23312",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 195.133.77.82:34815",
        "SOCKS 36.255.98.178:11272",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 36.255.98.180:12580",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 120.77.203.0:443",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 212.33.248.45:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}