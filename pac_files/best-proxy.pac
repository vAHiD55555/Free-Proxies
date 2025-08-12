function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.161.194.88:8085",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 67.211.219.122:8888",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 24.199.103.116:42206",
        "SOCKS 47.83.8.254:1111",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 35.238.111.20:3128",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 49.12.103.92:8080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 101.33.74.218:1111",
        "SOCKS 222.59.173.105:44124",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}