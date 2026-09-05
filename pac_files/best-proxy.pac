function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.24.47.42:1080",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 45.74.31.30:4111",
        "SOCKS 45.74.31.30:34829",
        "SOCKS 109.111.79.212:1080",
        "SOCKS 103.165.128.75:1080",
        "SOCKS 147.45.60.136:1082",
        "SOCKS 37.9.4.101:1088",
        "SOCKS 45.74.31.30:4386",
        "SOCKS 45.74.31.30:33905",
        "SOCKS 194.87.76.214:9050",
        "SOCKS 118.179.144.113:9090",
        "SOCKS 45.74.31.30:33999",
        "SOCKS 202.62.54.146:1080",
        "SOCKS 8.219.94.23:7890",
        "SOCKS 49.13.22.249:10801",
        "SOCKS 45.74.31.30:39610",
        "SOCKS 118.179.195.140:9090",
        "SOCKS 45.74.31.30:11476",
        "SOCKS 47.236.20.209:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}