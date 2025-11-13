function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.144.74.156:3620",
        "SOCKS 152.53.36.101:55589",
        "SOCKS 89.46.249.148:8588",
        "SOCKS 89.58.45.94:56789",
        "SOCKS 152.53.36.101:30181",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 89.58.45.94:18488",
        "SOCKS 157.180.121.252:55075",
        "SOCKS 61.49.87.3:80",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 35.78.218.9:3128",
        "SOCKS 152.53.36.101:42231",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 152.53.36.101:17359",
        "SOCKS 157.230.45.111:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 152.53.36.101:28581",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}