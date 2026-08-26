function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 93.118.127.222:1080",
        "SOCKS 102.204.14.8:8080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 144.31.185.62:1080",
        "SOCKS 45.32.195.109:9050",
        "SOCKS 103.166.184.104:9191",
        "SOCKS 178.150.77.204:10801",
        "SOCKS 47.82.123.15:1011",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 45.74.31.30:19531",
        "SOCKS 144.124.232.204:443",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 118.145.141.251:44037",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 182.53.28.79:8080",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 80.72.180.122:1080",
        "SOCKS 118.145.141.251:44220",
        "SOCKS 124.223.195.172:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}