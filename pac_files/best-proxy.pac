function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.91.111.48:1088",
        "SOCKS 113.160.132.26:8080",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 195.98.82.63:1080",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 104.234.124.3:1080",
        "SOCKS 103.124.197.26:8090",
        "SOCKS 138.199.222.72:9050",
        "SOCKS 77.239.108.222:11062",
        "SOCKS 43.167.226.158:5555",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 103.191.99.108:1566",
        "SOCKS 5.255.123.162:1080",
        "SOCKS 47.239.213.123:7080",
        "SOCKS 185.189.12.66:1080",
        "SOCKS 185.200.177.138:445",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 213.27.29.153:51000",
        "SOCKS 64.118.147.245:20000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}