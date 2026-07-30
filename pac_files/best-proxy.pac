function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.131.14.9:1088",
        "SOCKS 85.198.91.145:1081",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 144.217.12.20:10808",
        "SOCKS 14.143.222.113:57748",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 8.220.204.92:19",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 31.25.236.95:1080",
        "SOCKS 23.175.248.21:1080",
        "SOCKS 43.155.185.73:1080",
        "SOCKS 178.17.57.222:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 85.234.100.149:1080",
        "SOCKS 94.102.124.87:1080",
        "SOCKS 152.32.203.130:10808",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 144.124.232.204:1080",
        "SOCKS 192.109.248.112:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}