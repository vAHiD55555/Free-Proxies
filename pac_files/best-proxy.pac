function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.250.54.8:9000",
        "SOCKS 190.89.4.185:1080",
        "SOCKS 95.216.170.155:9082",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 200.35.153.56:999",
        "SOCKS 34.43.46.91:80",
        "SOCKS 78.24.180.210:8080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 8.210.17.35:100",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 82.29.197.201:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 137.184.58.163:9050",
        "SOCKS 107.151.148.153:1080",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 93.113.63.11:3128",
        "SOCKS 208.102.251.119:8118",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 45.143.94.111:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}