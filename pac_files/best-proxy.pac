function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.252.106.26:1111",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 47.76.104.45:50161",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 177.11.49.41:1088",
        "SOCKS 95.216.104.118:8888",
        "SOCKS 146.235.19.84:10805",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 144.31.25.69:21064",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 206.123.156.226:32049",
        "SOCKS 147.75.34.105:443",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 177.19.167.242:80",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 31.192.245.114:1080",
        "SOCKS 58.19.55.17:15114",
        "SOCKS 205.185.114.78:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}