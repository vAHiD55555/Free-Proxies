function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.157:57114",
        "SOCKS 8.211.42.167:1234",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 178.18.244.8:8888",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 103.147.250.93:1452",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 135.181.203.208:80",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 103.56.205.84:8080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 72.10.160.91:18749",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}