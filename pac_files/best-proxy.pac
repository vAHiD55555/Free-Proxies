function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.162.78.109:1080",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 169.155.48.155:3128",
        "SOCKS 103.81.175.218:28022",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 94.102.193.91:8080",
        "SOCKS 45.189.252.240:999",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 47.79.91.116:1122",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}