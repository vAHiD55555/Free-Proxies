function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.137:1020",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 176.9.164.117:60001",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 35.181.173.74:9443",
        "SOCKS 157.66.16.69:5568",
        "SOCKS 46.146.204.175:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 103.15.214.233:8080",
        "SOCKS 45.191.47.2:999",
        "SOCKS 189.89.154.130:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}