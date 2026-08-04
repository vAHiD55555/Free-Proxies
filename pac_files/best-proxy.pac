function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.87.128.239:9150",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 159.195.49.27:8888",
        "SOCKS 38.49.218.166:9050",
        "SOCKS 212.227.207.37:1050",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 107.173.140.173:1234",
        "SOCKS 47.74.46.81:8000",
        "SOCKS 176.65.140.216:1085",
        "SOCKS 103.150.206.77:1080",
        "SOCKS 102.69.146.59:7080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 103.176.187.228:9090",
        "SOCKS 119.148.20.109:22122",
        "SOCKS 58.120.135.195:1080",
        "SOCKS 77.95.201.16:9150",
        "SOCKS 65.20.105.241:10001",
        "SOCKS 23.27.143.117:3080",
        "SOCKS 47.250.11.111:18080",
        "SOCKS 124.41.225.101:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}