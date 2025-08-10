function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.115.21.11:1080",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 217.144.187.208:8118",
        "SOCKS 34.215.51.159:1080",
        "SOCKS 129.213.68.20:54321",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 109.120.133.3:1200",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 89.46.249.253:53018",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 185.93.89.176:4110",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 116.98.187.95:1014",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 173.209.63.69:8111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}