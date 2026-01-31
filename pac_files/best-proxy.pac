function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.253:5427",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 36.255.98.169:11654",
        "SOCKS 36.255.98.168:6956",
        "SOCKS 107.173.141.163:8080",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 62.60.131.204:5394",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 62.60.131.205:5204",
        "SOCKS 62.60.131.204:5003",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 46.146.204.175:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 13.229.47.109:80",
        "SOCKS 178.170.43.106:8081",
        "SOCKS 213.164.100.24:80",
        "SOCKS 36.255.98.180:4187",
        "SOCKS 62.60.131.205:4091",
        "SOCKS 123.182.233.70:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}