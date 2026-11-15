function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.47:4532",
        "SOCKS 45.74.31.42:7366",
        "SOCKS 45.74.31.46:4742",
        "SOCKS 45.74.31.47:6248",
        "SOCKS 110.235.240.135:1080",
        "SOCKS 176.65.151.240:1080",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 62.60.186.226:1080",
        "SOCKS 198.12.95.178:1080",
        "SOCKS 116.104.152.58:1044",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 193.43.104.16:1080",
        "SOCKS 167.179.110.14:1080",
        "SOCKS 103.243.82.38:8008",
        "SOCKS 83.147.18.168:1080",
        "SOCKS 141.148.153.100:10808",
        "SOCKS 69.174.54.155:15758",
        "SOCKS 194.187.149.198:1080",
        "SOCKS 221.225.48.121:8989",
        "SOCKS 103.136.70.198:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}