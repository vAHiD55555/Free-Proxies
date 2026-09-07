function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.71.217.93:1080",
        "SOCKS 2.27.63.250:8888",
        "SOCKS 45.67.213.4:3128",
        "SOCKS 45.194.33.12:30002",
        "SOCKS 5.75.133.113:10808",
        "SOCKS 5.249.165.195:20000",
        "SOCKS 85.193.65.88:8888",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 170.239.205.20:999",
        "SOCKS 146.190.94.105:1080",
        "SOCKS 185.118.51.230:3128",
        "SOCKS 174.138.165.211:36081",
        "SOCKS 14.225.204.32:10800",
        "SOCKS 118.179.144.113:9090",
        "SOCKS 178.104.234.144:8118",
        "SOCKS 159.223.86.111:1080",
        "SOCKS 174.138.165.214:35933",
        "SOCKS 47.91.109.17:3129",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 67.207.92.87:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}