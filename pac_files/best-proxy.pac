function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 200.59.191.233:999",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 164.163.40.15:10000",
        "SOCKS 40.177.106.156:8080",
        "SOCKS 144.124.227.90:10808",
        "SOCKS 103.28.121.58:80",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 147.45.248.195:3128",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 103.175.202.178:8090",
        "SOCKS 157.175.152.104:261",
        "SOCKS 208.65.90.3:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}