function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 102.36.127.231:1080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 107.173.230.93:40000",
        "SOCKS 140.238.241.74:1080",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 194.190.169.197:3701",
        "SOCKS 195.19.50.126:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 46.146.216.44:1080",
        "SOCKS 47.80.27.150:1080",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 212.220.113.31:1080",
        "SOCKS 45.4.136.106:10801",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 37.49.224.167:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 79.111.118.99:1080",
        "SOCKS 207.244.69.164:50005",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}