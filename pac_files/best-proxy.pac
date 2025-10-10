function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 196.204.83.233:1976",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 18.143.165.238:9090",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 200.174.198.158:8888",
        "SOCKS 200.35.50.89:3028",
        "SOCKS 220.247.163.185:1080",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 201.65.173.179:8080",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 117.161.170.163:9052",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 8.219.97.248:80",
        "SOCKS 179.96.28.58:80",
        "SOCKS 52.47.164.226:9304",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 145.40.97.148:30000",
        "SOCKS 178.33.77.209:10880",
        "SOCKS 103.171.82.213:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}