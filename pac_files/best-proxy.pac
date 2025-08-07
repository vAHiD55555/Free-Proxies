function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.20.192.194:3128",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 42.117.243.39:16000",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 109.135.16.145:49879",
        "SOCKS 103.14.251.20:38080",
        "SOCKS 212.110.188.220:34409",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 140.82.22.235:34587",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 113.120.61.189:43644",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}