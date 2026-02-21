function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.133.219.4:63434",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 123.54.197.16:20464",
        "SOCKS 47.251.74.38:8443",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 156.225.31.27:7890",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 24.102.236.218:8888",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 103.17.246.60:1080",
        "SOCKS 3.6.94.16:3128",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 103.174.178.137:1020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}