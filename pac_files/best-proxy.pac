function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.170:3949",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 80.78.30.182:3128",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 171.228.154.82:4001",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 185.93.89.145:4078",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 95.84.156.71:1111",
        "SOCKS 128.199.20.45:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}