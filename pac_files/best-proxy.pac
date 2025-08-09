function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.132.52.32:8080",
        "SOCKS 27.79.243.7:16000",
        "SOCKS 176.9.238.176:16379",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 3.107.252.199:8099",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 42.119.157.202:16000",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 165.227.174.249:33080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}