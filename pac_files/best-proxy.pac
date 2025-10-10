function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.169.36.109:1080",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 79.127.56.147:8080",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 18.143.165.238:9090",
        "SOCKS 1.10.141.115:8080",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 38.253.88.242:999",
        "SOCKS 113.160.37.152:53281",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 103.187.86.26:8080",
        "SOCKS 196.204.83.233:1976",
        "SOCKS 103.82.246.249:6080",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 67.43.236.20:3209",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}