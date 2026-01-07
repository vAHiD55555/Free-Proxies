function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.178.99.43:7302",
        "SOCKS 163.5.128.117:14270",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 43.210.30.230:237",
        "SOCKS 47.83.227.95:1100",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 202.58.77.9:8080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 104.248.146.99:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}