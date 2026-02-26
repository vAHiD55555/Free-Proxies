function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.239.86.249:3128",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 104.167.6.218:80",
        "SOCKS 61.72.221.204:3128",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 37.27.100.102:443",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 13.229.47.109:80",
        "SOCKS 104.248.59.38:80",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 183.249.5.111:22222",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 85.143.254.38:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}