function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.195.34.60:27391",
        "SOCKS 176.120.84.29:1080",
        "SOCKS 175.27.250.85:44092",
        "SOCKS 5.230.201.154:1080",
        "SOCKS 45.144.53.63:5000",
        "SOCKS 216.106.179.216:49331",
        "SOCKS 216.106.179.216:49464",
        "SOCKS 175.27.250.85:44220",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 103.20.61.251:1080",
        "SOCKS 85.198.87.168:8088",
        "SOCKS 95.211.174.135:3128",
        "SOCKS 43.156.84.41:10808",
        "SOCKS 188.128.86.74:1080",
        "SOCKS 141.147.109.224:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 194.163.174.78:1081",
        "SOCKS 175.27.250.85:44120",
        "SOCKS 154.37.221.222:10808",
        "SOCKS 103.6.235.13:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}