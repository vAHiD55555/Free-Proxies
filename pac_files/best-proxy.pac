function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:39919",
        "SOCKS 45.74.31.25:5394",
        "SOCKS 174.138.165.211:9231",
        "SOCKS 5.140.110.96:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 45.95.202.92:10808",
        "SOCKS 45.74.31.42:4944",
        "SOCKS 103.142.190.78:10808",
        "SOCKS 45.74.31.42:4135",
        "SOCKS 8.212.168.170:6379",
        "SOCKS 165.22.99.36:8002",
        "SOCKS 45.74.31.42:4200",
        "SOCKS 45.74.31.30:4243",
        "SOCKS 45.74.31.30:35646",
        "SOCKS 116.104.54.38:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 15.217.107.97:11981",
        "SOCKS 45.74.31.30:34923",
        "SOCKS 93.118.127.234:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}