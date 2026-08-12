function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.252.74:1080",
        "SOCKS 217.118.188.122:1080",
        "SOCKS 91.226.172.214:1080",
        "SOCKS 104.249.40.117:1080",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 223.111.182.16:1100",
        "SOCKS 83.222.24.37:1080",
        "SOCKS 103.88.234.239:40001",
        "SOCKS 129.150.47.213:9050",
        "SOCKS 80.252.137.246:1194",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 103.66.46.150:69",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 103.76.120.216:1080",
        "SOCKS 43.156.84.41:10808",
        "SOCKS 103.9.185.33:1080",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 45.194.33.12:30001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}