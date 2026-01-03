function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.248.189.223:1080",
        "SOCKS 62.60.131.189:7788",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 43.133.6.50:6006",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 43.167.168.60:6006",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 43.167.210.122:6006",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 116.202.103.223:29210",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}