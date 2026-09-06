function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.250.54.7:9000",
        "SOCKS 93.184.4.254:1080",
        "SOCKS 103.31.235.211:69",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 213.199.48.89:80",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 217.77.2.242:3128",
        "SOCKS 36.137.204.11:1081",
        "SOCKS 45.74.31.30:14929",
        "SOCKS 47.243.234.202:9898",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 103.136.106.5:1081",
        "SOCKS 103.248.47.230:1080",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 167.172.85.172:1080",
        "SOCKS 111.119.162.248:10942",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 15.235.21.254:8080",
        "SOCKS 103.101.202.27:1080",
        "SOCKS 5.255.99.75:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}