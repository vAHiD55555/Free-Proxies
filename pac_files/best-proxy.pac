function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44179",
        "SOCKS 103.204.211.48:32255",
        "SOCKS 84.254.198.175:1080",
        "SOCKS 149.248.21.106:8080",
        "SOCKS 156.238.250.51:8080",
        "SOCKS 221.176.85.230:1080",
        "SOCKS 45.74.31.30:8104",
        "SOCKS 118.145.141.251:44101",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 45.74.31.30:9403",
        "SOCKS 43.153.47.107:9050",
        "SOCKS 152.89.104.11:1080",
        "SOCKS 45.74.31.42:8594",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 192.9.241.51:26568",
        "SOCKS 118.145.141.251:44156",
        "SOCKS 181.215.18.40:8181",
        "SOCKS 118.145.141.251:44066",
        "SOCKS 81.95.26.134:8080",
        "SOCKS 118.145.141.251:44160",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}