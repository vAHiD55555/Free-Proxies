function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 84.17.51.241:3128",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 217.76.245.80:999",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 193.163.72.88:10808",
        "SOCKS 14.229.156.117:8080",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 95.216.17.79:3888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}