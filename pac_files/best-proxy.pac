function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.238.210.231:1011",
        "SOCKS 5.45.118.209:1080",
        "SOCKS 46.17.102.158:9450",
        "SOCKS 154.201.95.129:1080",
        "SOCKS 61.9.34.22:58765",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 84.200.128.182:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 120.77.203.0:443",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 101.2.166.73:1080",
        "SOCKS 203.25.208.163:1515",
        "SOCKS 144.31.226.71:5555",
        "SOCKS 212.87.198.96:1080",
        "SOCKS 176.12.74.0:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 8.218.210.54:80",
        "SOCKS 109.71.244.97:1080",
        "SOCKS 147.45.162.126:8888",
        "SOCKS 185.21.141.238:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}