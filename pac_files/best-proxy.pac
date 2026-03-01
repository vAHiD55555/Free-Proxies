function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.127:1080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 138.2.72.115:1090",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 165.22.110.253:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 124.248.164.156:1080",
        "SOCKS 14.56.118.214:3128",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 43.161.253.215:1080",
        "SOCKS 45.128.205.32:1080",
        "SOCKS 5.255.99.75:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}