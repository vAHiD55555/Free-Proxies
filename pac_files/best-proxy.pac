function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.33.1.106:37645",
        "SOCKS 45.74.31.42:6649",
        "SOCKS 45.74.31.30:8404",
        "SOCKS 152.70.107.226:1080",
        "SOCKS 118.145.141.251:44043",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 201.46.86.37:8080",
        "SOCKS 118.145.141.251:44123",
        "SOCKS 185.214.135.169:1080",
        "SOCKS 118.145.141.251:44242",
        "SOCKS 104.161.23.122:5058",
        "SOCKS 118.145.141.251:44031",
        "SOCKS 117.95.7.142:8989",
        "SOCKS 45.74.31.30:9326",
        "SOCKS 107.172.5.202:7890",
        "SOCKS 72.205.0.93:4145",
        "SOCKS 118.145.141.251:44222",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 83.147.216.208:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}