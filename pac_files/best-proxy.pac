function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 147.45.221.111:1082",
        "SOCKS 174.64.199.82:4145",
        "SOCKS 77.244.64.163:8080",
        "SOCKS 154.203.132.81:5080",
        "SOCKS 220.112.1.194:1088",
        "SOCKS 65.21.252.66:10811",
        "SOCKS 216.22.13.244:1081",
        "SOCKS 82.9.133.51:9150",
        "SOCKS 45.133.251.223:1080",
        "SOCKS 95.215.8.84:30755",
        "SOCKS 152.32.203.130:10808",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 103.151.75.21:2025",
        "SOCKS 178.252.180.59:10909",
        "SOCKS 47.250.115.134:1080",
        "SOCKS 118.145.141.251:44011",
        "SOCKS 120.133.82.62:44202",
        "SOCKS 79.137.198.159:42771",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 216.106.179.216:49327",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}