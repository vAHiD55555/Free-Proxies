function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:40825",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 154.236.177.103:1977",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 45.12.129.42:80",
        "SOCKS 47.84.70.29:8888",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 195.162.19.75:80",
        "SOCKS 169.57.157.148:80",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 150.40.181.177:5555",
        "SOCKS 81.180.92.198:8080",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}