function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 94.100.18.111:3128",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 47.86.41.142:1080",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 110.235.240.104:1080",
        "SOCKS 94.254.244.251:8192",
        "SOCKS 93.184.4.37:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 184.170.251.30:11288",
        "SOCKS 120.77.203.0:443",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 36.255.98.167:23006",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 125.87.82.86:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}