function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.194.217.97:1080",
        "SOCKS 156.238.226.151:40001",
        "SOCKS 47.238.173.39:1011",
        "SOCKS 165.154.3.4:10808",
        "SOCKS 43.156.201.214:2080",
        "SOCKS 139.59.44.192:9050",
        "SOCKS 180.191.2.166:8081",
        "SOCKS 43.134.58.45:1080",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 103.96.233.58:1080",
        "SOCKS 195.19.50.135:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 89.163.135.20:8236",
        "SOCKS 47.237.107.41:4145",
        "SOCKS 8.212.165.164:2080",
        "SOCKS 147.45.60.139:1082",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 195.133.65.238:10909",
        "SOCKS 185.93.104.246:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}