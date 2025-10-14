function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.147.163.196:9966",
        "SOCKS 13.115.193.75:1210",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 8.215.18.222:1100",
        "SOCKS 160.25.8.26:11011",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 171.228.166.129:1001",
        "SOCKS 138.199.25.13:3902",
        "SOCKS 185.93.89.187:4289",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 65.108.251.40:22996",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 103.187.39.21:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 125.141.133.98:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}