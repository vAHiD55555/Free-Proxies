function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.4.18:7779",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 123.54.197.53:23548",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 8.213.222.157:8008",
        "SOCKS 8.220.141.8:3128",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 123.54.197.16:21248",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 123.54.197.25:20763",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 46.20.106.102:1080",
        "SOCKS 193.56.255.179:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}