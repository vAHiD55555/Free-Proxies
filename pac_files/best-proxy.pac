function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.49:5566",
        "SOCKS 117.74.65.207:443",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 177.234.217.42:999",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 47.237.132.36:33333",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 51.15.196.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}