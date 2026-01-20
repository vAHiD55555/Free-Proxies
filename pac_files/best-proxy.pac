function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.8.69.128:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 36.255.98.175:8123",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 3.24.178.81:80",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 35.180.188.216:80",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 152.53.171.242:46037",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 72.10.160.170:22393",
        "SOCKS 169.57.157.148:80",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 152.53.171.242:41365",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 103.157.24.205:3125",
        "SOCKS 37.120.162.180:32901",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 37.120.162.180:42791",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}