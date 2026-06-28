function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.154.43.198:39522",
        "SOCKS 185.210.85.26:56981",
        "SOCKS 23.133.196.8:9000",
        "SOCKS 46.36.17.111:1080",
        "SOCKS 5.75.168.247:8066",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 65.109.87.121:18080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 77.222.58.239:14541",
        "SOCKS 165.227.211.170:9064",
        "SOCKS 103.138.145.228:1999",
        "SOCKS 5.75.168.247:8048",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}