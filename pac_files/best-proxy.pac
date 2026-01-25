function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.153:5863",
        "SOCKS 13.229.107.106:80",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 5.129.216.47:1081",
        "SOCKS 169.57.157.148:80",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 104.248.59.38:80",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 62.60.231.71:56608",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 62.60.131.205:4240",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 125.227.225.157:3389",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}