function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 216.106.179.216:49415",
        "SOCKS 1.245.175.180:1080",
        "SOCKS 178.208.66.47:8051",
        "SOCKS 81.70.62.145:15163",
        "SOCKS 5.149.208.240:1080",
        "SOCKS 47.237.110.50:1080",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 165.154.3.4:10808",
        "SOCKS 47.76.171.214:3128",
        "SOCKS 5.230.201.154:1080",
        "SOCKS 201.186.41.170:999",
        "SOCKS 8.212.151.166:45",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 45.61.133.104:7777",
        "SOCKS 157.245.196.151:9090",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 217.12.209.4:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}