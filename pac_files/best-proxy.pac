function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.128.33.60:53405",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 103.147.246.77:8199",
        "SOCKS 78.12.143.148:498",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 8.220.136.174:1080",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 201.77.110.33:999",
        "SOCKS 159.89.113.155:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}