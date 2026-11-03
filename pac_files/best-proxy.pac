function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.43.104.110:1080",
        "SOCKS 49.82.52.72:8989",
        "SOCKS 45.74.31.46:4967",
        "SOCKS 69.174.54.42:13969",
        "SOCKS 129.150.47.213:9050",
        "SOCKS 116.103.21.71:5000",
        "SOCKS 145.220.227.196:4145",
        "SOCKS 66.154.107.212:1080",
        "SOCKS 180.105.87.52:8989",
        "SOCKS 45.74.31.42:6419",
        "SOCKS 45.74.31.41:6600",
        "SOCKS 104.253.1.65:10808",
        "SOCKS 118.71.227.154:1084",
        "SOCKS 218.48.112.218:1080",
        "SOCKS 178.184.249.194:1080",
        "SOCKS 221.176.85.229:1080",
        "SOCKS 45.74.31.42:6636",
        "SOCKS 47.254.84.157:1080",
        "SOCKS 217.144.162.41:1080",
        "SOCKS 45.74.31.40:14694",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}