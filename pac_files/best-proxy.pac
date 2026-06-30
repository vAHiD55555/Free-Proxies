function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.212.237.43:43648",
        "SOCKS 152.53.144.223:1080",
        "SOCKS 213.155.11.237:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 167.172.27.39:9058",
        "SOCKS 62.60.149.161:3128",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 88.99.82.67:443",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 47.83.14.133:1011",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 77.110.126.90:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 168.119.173.104:41346",
        "SOCKS 203.25.208.163:1515",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 8.209.96.245:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}