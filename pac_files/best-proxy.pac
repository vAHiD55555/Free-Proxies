function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 60.13.42.157:1080",
        "SOCKS 43.167.252.237:6006",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 43.167.166.20:6006",
        "SOCKS 43.167.191.134:6006",
        "SOCKS 43.167.225.183:6006",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 62.60.131.181:4183",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 192.241.156.17:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}