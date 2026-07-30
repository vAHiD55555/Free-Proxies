function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.28.149.156:8443",
        "SOCKS 150.241.96.73:1080",
        "SOCKS 45.91.55.95:443",
        "SOCKS 177.10.66.14:1080",
        "SOCKS 93.123.30.53:1080",
        "SOCKS 45.144.30.59:808",
        "SOCKS 47.250.187.181:33333",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 64.188.77.221:3128",
        "SOCKS 47.239.213.123:7080",
        "SOCKS 216.106.179.216:49514",
        "SOCKS 147.45.60.249:1082",
        "SOCKS 136.248.65.104:1088",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 147.45.225.141:10808",
        "SOCKS 131.153.163.222:37556",
        "SOCKS 107.161.168.159:3333",
        "SOCKS 188.93.140.146:1080",
        "SOCKS 43.162.90.69:1080",
        "SOCKS 193.32.177.152:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}