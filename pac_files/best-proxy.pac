function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.62.50.222:1080",
        "SOCKS 94.184.25.64:240",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 94.184.25.56:240",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 213.35.110.67:10810",
        "SOCKS 5.129.216.47:1081",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 84.21.172.174:1080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 89.249.65.191:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}