function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.190.169.197:3701",
        "SOCKS 158.220.101.43:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 91.206.14.55:1080",
        "SOCKS 192.9.171.168:1080",
        "SOCKS 156.238.250.51:8080",
        "SOCKS 78.188.230.81:3310",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 89.249.245.4:1080",
        "SOCKS 31.77.198.168:9000",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 47.81.56.193:8888",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 107.173.230.93:40000",
        "SOCKS 176.120.28.106:8080",
        "SOCKS 164.52.216.148:8080",
        "SOCKS 43.106.60.21:1080",
        "SOCKS 192.9.231.220:30001",
        "SOCKS 45.10.42.68:1080",
        "SOCKS 103.41.113.76:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}