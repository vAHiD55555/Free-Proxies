function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.247.23.28:9223",
        "SOCKS 45.90.216.103:8080",
        "SOCKS 180.149.232.153:61245",
        "SOCKS 103.159.96.183:1080",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 202.58.77.19:3127",
        "SOCKS 31.193.193.69:1488",
        "SOCKS 47.79.95.169:1122",
        "SOCKS 67.43.228.254:28187",
        "SOCKS 45.174.94.26:999",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 47.76.169.110:8888",
        "SOCKS 103.208.102.2:8080",
        "SOCKS 88.216.98.200:53983",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 188.132.150.198:8080",
        "SOCKS 102.68.128.212:8080",
        "SOCKS 103.76.107.3:8085",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}