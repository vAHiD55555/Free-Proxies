function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.72.15.151:10006",
        "SOCKS 185.93.89.157:10800",
        "SOCKS 185.93.89.143:4045",
        "SOCKS 103.82.20.126:8888",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 185.93.89.158:4681",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 101.255.151.30:8080",
        "SOCKS 177.54.205.103:8080",
        "SOCKS 185.93.89.183:11682",
        "SOCKS 185.93.89.179:8082",
        "SOCKS 185.93.89.182:4868",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 185.93.89.179:10586",
        "SOCKS 8.211.194.85:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}