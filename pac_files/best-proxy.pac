function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 79.127.56.147:8080",
        "SOCKS 177.234.194.31:999",
        "SOCKS 91.84.99.28:80",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 151.80.147.171:3128",
        "SOCKS 45.79.203.254:48388",
        "SOCKS 45.236.129.64:3128",
        "SOCKS 181.230.151.52:8080",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 211.230.49.122:3128",
        "SOCKS 103.82.246.249:6080",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 182.160.106.205:1080",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 199.188.204.105:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}