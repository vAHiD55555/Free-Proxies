function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.46.233.250:3127",
        "SOCKS 115.127.179.162:2589",
        "SOCKS 72.240.9.63:80",
        "SOCKS 183.88.231.188:34599",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 52.38.230.247:3128",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 36.255.98.160:11231",
        "SOCKS 121.230.8.90:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 78.140.46.48:1080",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 190.97.231.0:999",
        "SOCKS 36.133.208.130:8888",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 41.93.63.66:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}