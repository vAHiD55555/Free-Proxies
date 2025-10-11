function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.237.68.206:1100",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 92.113.150.5:1080",
        "SOCKS 78.12.249.123:8026",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 171.252.129.7:18002",
        "SOCKS 8.219.229.53:5060",
        "SOCKS 200.24.146.97:8080",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 47.243.92.199:3128",
        "SOCKS 177.234.194.30:999",
        "SOCKS 101.255.107.181:8090",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 8.211.195.173:9080",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 102.0.18.198:8080",
        "SOCKS 129.226.207.13:20201",
        "SOCKS 103.141.66.78:46",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}