function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 180.183.97.16:8080",
        "SOCKS 62.60.131.193:6379",
        "SOCKS 62.60.131.193:4070",
        "SOCKS 213.35.110.67:10809",
        "SOCKS 13.229.107.106:80",
        "SOCKS 157.66.16.69:5568",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 36.255.98.180:4724",
        "SOCKS 36.255.98.167:5356",
        "SOCKS 36.255.98.169:4156",
        "SOCKS 41.65.160.172:1977",
        "SOCKS 62.60.131.191:6705",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 36.255.98.161:4703",
        "SOCKS 62.60.131.194:4092",
        "SOCKS 62.60.131.193:4713",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 95.216.17.79:3888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}