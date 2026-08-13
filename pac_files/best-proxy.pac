function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.156.84.41:10808",
        "SOCKS 13.140.164.179:3047",
        "SOCKS 8.211.200.183:1720",
        "SOCKS 176.120.84.29:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 47.251.87.199:8081",
        "SOCKS 216.48.180.117:8080",
        "SOCKS 78.188.230.81:3310",
        "SOCKS 47.251.73.54:8834",
        "SOCKS 111.119.162.248:10909",
        "SOCKS 188.247.54.234:1080",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 23.95.106.31:9150",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 47.251.87.199:2083",
        "SOCKS 43.134.58.45:1080",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 129.150.47.213:9050",
        "SOCKS 185.133.239.244:32784",
        "SOCKS 151.243.224.12:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}