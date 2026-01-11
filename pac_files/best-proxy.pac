function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.133.219.4:63434",
        "SOCKS 184.170.251.30:11288",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 62.60.131.186:4580",
        "SOCKS 72.10.160.90:32103",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 67.43.228.254:25771",
        "SOCKS 77.123.145.21:3128",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 47.236.147.45:1100",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 139.59.24.173:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 51.158.98.211:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}