function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.218.99.137:3356",
        "SOCKS 179.96.28.58:80",
        "SOCKS 181.10.200.154:3128",
        "SOCKS 223.25.109.114:8199",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 88.216.98.199:53983",
        "SOCKS 173.249.48.227:3128",
        "SOCKS 43.248.128.209:7890",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 27.72.100.236:4996",
        "SOCKS 212.175.61.30:8080",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 185.93.89.163:4022",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 94.247.129.244:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}