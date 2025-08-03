function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.203.35:28080",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 80.78.30.182:3128",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 139.59.228.95:8118",
        "SOCKS 8.212.151.166:1081",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 154.236.177.105:1976",
        "SOCKS 8.215.31.146:1347",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 144.76.159.121:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}