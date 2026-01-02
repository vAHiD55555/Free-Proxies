function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.133.10.104:6006",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 106.13.58.110:8888",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 43.133.21.101:6006",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 43.133.11.249:6006",
        "SOCKS 43.167.243.44:6006",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 43.167.254.87:6006",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 23.249.27.167:10808",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 114.99.200.41:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}