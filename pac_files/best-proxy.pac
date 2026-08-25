function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 64.188.150.151:1080",
        "SOCKS 103.197.243.244:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 62.60.210.173:1080",
        "SOCKS 45.74.31.30:4080",
        "SOCKS 91.246.1.6:4433",
        "SOCKS 118.145.141.251:44080",
        "SOCKS 151.185.58.184:8080",
        "SOCKS 103.191.218.119:69",
        "SOCKS 144.124.253.249:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 95.216.117.50:9050",
        "SOCKS 5.130.50.118:1080",
        "SOCKS 94.23.21.76:9050",
        "SOCKS 102.69.146.59:7080",
        "SOCKS 31.57.178.211:8080",
        "SOCKS 188.166.120.48:1080",
        "SOCKS 118.145.141.251:44130",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 34.69.61.247:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}