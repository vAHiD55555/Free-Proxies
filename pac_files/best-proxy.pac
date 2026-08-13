function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 153.80.240.37:8080",
        "SOCKS 194.163.174.78:1083",
        "SOCKS 156.238.250.51:8080",
        "SOCKS 103.143.11.246:9005",
        "SOCKS 43.135.172.174:9050",
        "SOCKS 216.106.179.216:49326",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 47.82.78.113:1011",
        "SOCKS 52.78.144.96:1080",
        "SOCKS 152.228.134.176:8888",
        "SOCKS 77.90.8.154:9083",
        "SOCKS 31.77.198.168:9050",
        "SOCKS 103.138.145.228:1999",
        "SOCKS 47.80.27.150:1080",
        "SOCKS 103.156.16.234:8818",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 168.119.173.104:41346",
        "SOCKS 165.154.20.187:10808",
        "SOCKS 38.75.209.14:999",
        "SOCKS 38.183.144.94:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}