function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.216.98.200:53983",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 4.206.212.39:3128",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 103.171.82.213:8080",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 196.204.83.233:1976",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 51.158.125.47:16379",
        "SOCKS 81.90.149.188:3128",
        "SOCKS 173.249.48.227:3128",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 78.12.220.164:9174",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 31.193.193.69:1488",
        "SOCKS 160.25.8.162:11011",
        "SOCKS 18.143.165.238:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}