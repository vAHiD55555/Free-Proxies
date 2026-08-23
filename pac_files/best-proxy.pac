function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44178",
        "SOCKS 182.163.96.66:1080",
        "SOCKS 91.84.98.74:12546",
        "SOCKS 150.241.70.103:6666",
        "SOCKS 45.74.31.30:17000",
        "SOCKS 66.151.32.105:1080",
        "SOCKS 47.239.140.6:80",
        "SOCKS 118.145.141.251:44001",
        "SOCKS 47.90.149.238:3129",
        "SOCKS 43.153.82.29:9050",
        "SOCKS 47.251.87.74:8080",
        "SOCKS 118.145.141.251:44235",
        "SOCKS 46.17.43.219:7890",
        "SOCKS 61.9.32.30:58765",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 193.23.222.22:1088",
        "SOCKS 45.74.31.30:9443",
        "SOCKS 34.43.46.91:80",
        "SOCKS 45.74.31.42:5750",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}