function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.213.156.191:3541",
        "SOCKS 129.151.9.55:10808",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 67.207.92.87:1088",
        "SOCKS 47.236.177.236:1080",
        "SOCKS 154.37.221.222:10808",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 160.250.54.9:9000",
        "SOCKS 43.106.60.21:1080",
        "SOCKS 103.216.106.169:1080",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 79.137.196.250:1080",
        "SOCKS 213.176.113.24:50001",
        "SOCKS 81.90.158.110:3128",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 47.82.65.93:1011",
        "SOCKS 103.239.52.100:1080",
        "SOCKS 195.19.51.21:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}