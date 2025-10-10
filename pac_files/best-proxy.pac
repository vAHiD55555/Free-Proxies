function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.169.46.116:1090",
        "SOCKS 160.25.48.33:9090",
        "SOCKS 198.177.125.181:3949",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 103.84.177.30:8083",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 147.78.66.83:1080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 207.248.115.114:999",
        "SOCKS 146.190.82.119:3128",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 103.151.22.26:8082",
        "SOCKS 45.4.0.59:999",
        "SOCKS 51.79.99.237:4601",
        "SOCKS 157.125.220.80:8080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 157.245.154.238:8080",
        "SOCKS 103.174.178.138:1145",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 27.74.215.131:30245",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}