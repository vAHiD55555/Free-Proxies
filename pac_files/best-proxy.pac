function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.171.50.169:6688",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 43.133.10.184:6006",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 43.247.13.234:5678",
        "SOCKS 43.133.13.217:6006",
        "SOCKS 103.171.83.25:10810",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 203.189.135.14:1080",
        "SOCKS 35.182.97.107:80",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 62.60.131.193:4241",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 43.133.22.97:6006",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 121.205.215.44:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}