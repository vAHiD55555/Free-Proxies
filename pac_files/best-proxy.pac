function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.77.223.2:9050",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 57.128.8.176:8891",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 185.200.177.138:445",
        "SOCKS 43.203.195.46:80",
        "SOCKS 132.226.7.23:30277",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 103.197.188.63:1080",
        "SOCKS 47.90.149.238:111",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 78.109.137.53:1080",
        "SOCKS 159.223.52.199:3128",
        "SOCKS 139.59.59.122:8118",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 64.225.42.129:3001",
        "SOCKS 89.208.232.117:1080",
        "SOCKS 45.76.13.121:49995",
        "SOCKS 31.76.80.215:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}