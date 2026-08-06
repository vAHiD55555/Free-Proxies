function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 146.56.191.98:14785",
        "SOCKS 77.239.96.194:1081",
        "SOCKS 47.82.112.38:1080",
        "SOCKS 193.180.215.113:18081",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 165.140.167.167:9050",
        "SOCKS 47.84.97.185:1081",
        "SOCKS 89.168.67.102:1080",
        "SOCKS 104.234.124.3:1080",
        "SOCKS 5.8.204.148:7080",
        "SOCKS 37.204.230.182:1080",
        "SOCKS 8.213.222.247:81",
        "SOCKS 185.200.177.138:445",
        "SOCKS 173.208.243.148:9050",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 103.234.31.253:8080",
        "SOCKS 79.137.198.159:42771",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 8.213.222.247:3129",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}