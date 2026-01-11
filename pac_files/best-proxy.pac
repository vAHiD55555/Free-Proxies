function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.28.121.58:80",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 115.114.77.133:9090",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 124.248.164.61:1080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 78.12.223.246:2724",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 103.174.178.145:2005",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}