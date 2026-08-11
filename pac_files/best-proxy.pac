function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 82.65.237.58:9050",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 43.162.90.69:1080",
        "SOCKS 77.50.235.130:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 45.152.66.150:1025",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 175.27.250.85:44176",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 109.199.107.68:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 27.124.43.201:1080",
        "SOCKS 79.137.196.250:1080",
        "SOCKS 103.124.197.26:8090",
        "SOCKS 91.144.45.166:8089",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 45.137.43.0:1081",
        "SOCKS 43.138.214.122:9981",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}