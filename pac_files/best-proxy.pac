function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.119.111.239:999",
        "SOCKS 172.86.126.35:443",
        "SOCKS 183.249.5.214:22222",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 217.76.245.80:999",
        "SOCKS 206.123.156.185:7102",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 20.3.145.242:50161",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 120.77.203.0:443",
        "SOCKS 121.230.8.11:1080",
        "SOCKS 195.46.183.181:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 47.101.149.27:9010",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}