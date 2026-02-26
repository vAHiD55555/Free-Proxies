function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.249.3.59:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 43.132.106.29:21080",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 156.255.90.27:58367",
        "SOCKS 125.128.12.194:3128",
        "SOCKS 159.65.230.91:20103",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 103.28.121.58:80",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 193.56.255.181:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}