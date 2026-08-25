function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:15770",
        "SOCKS 45.74.31.30:5001",
        "SOCKS 102.68.135.157:8080",
        "SOCKS 45.74.31.42:7995",
        "SOCKS 188.143.129.133:1080",
        "SOCKS 45.74.31.42:11368",
        "SOCKS 45.74.31.42:10201",
        "SOCKS 112.105.12.235:1111",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 45.74.31.42:28478",
        "SOCKS 45.74.31.30:5060",
        "SOCKS 62.60.210.173:1080",
        "SOCKS 102.69.146.59:7080",
        "SOCKS 45.74.31.30:39116",
        "SOCKS 223.25.109.163:8199",
        "SOCKS 194.87.79.243:2333",
        "SOCKS 151.185.58.33:8080",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 45.74.31.42:8750",
        "SOCKS 45.74.31.30:9832",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}