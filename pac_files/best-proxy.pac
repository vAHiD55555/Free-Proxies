function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:11177",
        "SOCKS 78.37.45.233:1080",
        "SOCKS 64.56.71.124:10808",
        "SOCKS 5.128.37.65:10808",
        "SOCKS 140.150.226.60:1080",
        "SOCKS 107.173.153.250:1080",
        "SOCKS 37.122.149.61:1080",
        "SOCKS 45.74.31.47:5143",
        "SOCKS 45.74.31.41:6032",
        "SOCKS 42.114.69.219:20001",
        "SOCKS 37.122.149.59:1080",
        "SOCKS 121.234.57.63:15565",
        "SOCKS 143.202.210.76:1080",
        "SOCKS 45.74.31.47:7011",
        "SOCKS 112.105.12.235:1111",
        "SOCKS 178.236.17.195:1080",
        "SOCKS 45.74.31.41:6630",
        "SOCKS 45.74.31.47:6520",
        "SOCKS 31.58.144.19:1080",
        "SOCKS 45.74.31.47:11503",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}