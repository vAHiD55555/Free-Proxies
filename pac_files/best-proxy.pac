function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.62:4145",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 65.108.251.40:32553",
        "SOCKS 8.219.160.198:1011",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 37.44.238.2:60796",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 72.10.160.174:8097",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 138.199.25.13:3902",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 8.219.172.7:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}