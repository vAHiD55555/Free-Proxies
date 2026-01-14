function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.96.238.40:8080",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 124.248.190.31:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 72.10.160.91:26909",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 115.127.107.106:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 91.211.115.127:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 36.94.232.177:3113",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 179.96.28.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}