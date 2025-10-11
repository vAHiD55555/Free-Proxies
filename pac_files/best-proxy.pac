function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.46.4.93:8080",
        "SOCKS 87.106.208.203:14008",
        "SOCKS 103.165.156.11:8090",
        "SOCKS 190.121.157.41:999",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 120.92.212.16:7890",
        "SOCKS 157.15.63.32:8080",
        "SOCKS 103.69.106.158:8181",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 52.188.28.218:3128",
        "SOCKS 52.47.164.226:9304",
        "SOCKS 131.72.69.209:8080",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 38.194.246.34:999",
        "SOCKS 222.59.173.105:44076",
        "SOCKS 148.135.122.52:1111",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 103.139.98.169:8080",
        "SOCKS 190.14.254.49:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}