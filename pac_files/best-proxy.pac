function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.242.36.21:1111",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 218.1.211.2:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 45.166.93.113:999",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 67.43.228.254:16383",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 62.210.37.74:8012",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 121.205.213.141:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}