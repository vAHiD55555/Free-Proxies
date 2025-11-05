function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.203.234:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 41.65.160.173:1976",
        "SOCKS 157.180.121.252:54151",
        "SOCKS 23.137.105.63:20751",
        "SOCKS 185.105.230.45:3128",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 43.229.79.217:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 103.109.212.85:8428",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 44.251.173.250:368",
        "SOCKS 8.142.3.145:3306",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}