function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.151.218:5566",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 72.10.160.93:17981",
        "SOCKS 91.236.74.10:8080",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 159.8.114.37:80",
        "SOCKS 18.141.177.23:80",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 8.222.249.27:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}