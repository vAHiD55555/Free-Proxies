function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.45.245.39:1080",
        "SOCKS 178.150.77.204:10801",
        "SOCKS 47.82.81.87:1011",
        "SOCKS 88.218.206.170:22",
        "SOCKS 8.213.134.213:8081",
        "SOCKS 216.106.179.216:49251",
        "SOCKS 216.106.179.216:49361",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 86.53.163.185:10002",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 161.35.90.93:1082",
        "SOCKS 43.134.58.45:1080",
        "SOCKS 47.252.18.37:6379",
        "SOCKS 8.220.204.215:8443",
        "SOCKS 64.176.44.31:1080",
        "SOCKS 34.43.46.91:80",
        "SOCKS 144.76.165.249:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}