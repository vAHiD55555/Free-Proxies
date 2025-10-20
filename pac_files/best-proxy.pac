function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.142.3.145:3306",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 8.218.39.40:10800",
        "SOCKS 40.172.232.213:8989",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 65.108.251.40:17427",
        "SOCKS 65.108.251.40:42047",
        "SOCKS 102.36.127.53:1080",
        "SOCKS 65.108.251.40:10651",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 103.174.178.138:1145",
        "SOCKS 41.65.160.173:1976",
        "SOCKS 15.168.235.57:407",
        "SOCKS 139.99.19.11:3043",
        "SOCKS 185.93.89.179:8825",
        "SOCKS 51.20.192.194:15311",
        "SOCKS 43.209.130.76:109",
        "SOCKS 185.93.89.144:4270",
        "SOCKS 185.93.89.183:4670",
        "SOCKS 8.222.151.218:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}