function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.110.114.116:8080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 27.79.140.116:16000",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 45.134.15.205:1080",
        "SOCKS 185.93.89.145:4052",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 218.31.88.85:11889",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 41.65.160.173:1976",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 183.166.132.124:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}