function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.124.232.204:1080",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 144.31.222.106:7890",
        "SOCKS 103.121.120.242:1080",
        "SOCKS 93.123.118.15:1080",
        "SOCKS 216.106.179.216:49229",
        "SOCKS 49.0.0.175:1080",
        "SOCKS 8.213.195.191:312",
        "SOCKS 13.140.164.179:3131",
        "SOCKS 43.156.84.41:10808",
        "SOCKS 111.67.103.90:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 178.128.82.131:10808",
        "SOCKS 194.87.244.88:9050",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 171.253.92.42:1081",
        "SOCKS 202.62.49.65:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}