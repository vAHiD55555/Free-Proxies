function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.27.14.220:8561",
        "SOCKS 45.173.12.141:1994",
        "SOCKS 95.47.239.75:3128",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 103.76.107.3:8085",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 175.47.237.95:6128",
        "SOCKS 74.50.96.247:8888",
        "SOCKS 18.143.165.238:9090",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 103.160.205.86:8080",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 20.210.76.104:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}