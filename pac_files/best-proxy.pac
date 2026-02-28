function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 106.45.221.168:3256",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 35.180.188.216:80",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 144.31.155.166:1080",
        "SOCKS 159.65.230.91:20488",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 193.233.254.38:1080",
        "SOCKS 185.208.74.38:1080",
        "SOCKS 14.241.39.169:8080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 178.156.224.42:3128",
        "SOCKS 159.65.230.91:20680",
        "SOCKS 159.65.230.91:20103",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 213.35.110.67:10850",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 159.65.230.91:20372",
        "SOCKS 178.128.167.129:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}