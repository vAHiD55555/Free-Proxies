function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.165.233.121:9151",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 173.209.63.69:8111",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 208.102.24.225:8888",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 87.107.48.53:1080",
        "SOCKS 203.76.98.21:45958",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 31.128.41.253:18080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}