function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.16.62.138:10888",
        "SOCKS 47.115.35.231:3128",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 27.79.255.99:16000",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 47.88.18.204:8023",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 103.189.197.83:8181",
        "SOCKS 185.208.102.157:8080",
        "SOCKS 47.238.130.212:8004",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 31.128.41.253:18080",
        "SOCKS 47.122.65.254:8081",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 222.129.37.77:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}