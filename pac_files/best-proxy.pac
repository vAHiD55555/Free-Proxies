function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.213.129.15:5001",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 116.104.83.249:30019",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 186.148.178.195:999",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 51.159.159.73:80",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 106.52.2.26:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}