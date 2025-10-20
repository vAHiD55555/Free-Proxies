function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 64.227.131.240:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 43.208.25.125:8004",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 190.145.227.114:999",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 125.27.192.162:8081",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 185.200.38.56:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 101.255.208.18:8090",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 8.222.168.166:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}