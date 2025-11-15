function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 89.58.45.94:39877",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 212.113.100.43:10808",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 89.58.45.94:22727",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 5.9.230.13:60001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}