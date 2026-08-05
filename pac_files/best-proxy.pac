function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.91.121.61:1088",
        "SOCKS 43.230.193.154:1080",
        "SOCKS 13.38.217.179:29788",
        "SOCKS 43.160.255.142:7890",
        "SOCKS 104.234.124.3:1080",
        "SOCKS 47.238.130.212:443",
        "SOCKS 91.98.97.79:2222",
        "SOCKS 45.61.188.134:44499",
        "SOCKS 47.82.80.127:1011",
        "SOCKS 23.137.251.202:9050",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 45.95.38.57:9050",
        "SOCKS 178.104.109.88:9050",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 176.65.140.216:1081",
        "SOCKS 221.176.85.227:1080",
        "SOCKS 176.65.140.216:1085",
        "SOCKS 43.106.60.21:1080",
        "SOCKS 87.107.68.231:1081",
        "SOCKS 185.227.144.57:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}