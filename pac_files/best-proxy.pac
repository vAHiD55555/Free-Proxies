function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.41:4155",
        "SOCKS 45.74.31.46:4047",
        "SOCKS 185.221.154.91:1080",
        "SOCKS 95.140.152.86:1080",
        "SOCKS 46.72.32.18:1080",
        "SOCKS 212.77.75.25:1088",
        "SOCKS 1.197.249.24:10808",
        "SOCKS 213.139.210.13:8888",
        "SOCKS 212.67.12.161:1080",
        "SOCKS 92.118.127.93:1080",
        "SOCKS 137.66.24.131:1080",
        "SOCKS 89.22.226.183:1080",
        "SOCKS 107.150.41.226:16137",
        "SOCKS 116.110.241.234:1080",
        "SOCKS 79.98.32.94:1080",
        "SOCKS 172.104.57.44:11080",
        "SOCKS 45.74.31.41:4030",
        "SOCKS 45.74.31.46:4069",
        "SOCKS 3.88.46.135:1081",
        "SOCKS 107.173.230.93:40000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}