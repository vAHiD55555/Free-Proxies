function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:24148",
        "SOCKS 45.79.203.254:48388",
        "SOCKS 45.74.31.42:7010",
        "SOCKS 103.138.145.228:1999",
        "SOCKS 35.223.220.43:9050",
        "SOCKS 47.82.87.12:1011",
        "SOCKS 91.103.120.49:443",
        "SOCKS 45.74.31.30:36724",
        "SOCKS 45.74.31.30:4692",
        "SOCKS 77.42.112.157:9050",
        "SOCKS 37.49.224.243:1080",
        "SOCKS 88.218.206.170:22",
        "SOCKS 45.74.31.42:6398",
        "SOCKS 89.251.9.135:1080",
        "SOCKS 151.185.59.36:8080",
        "SOCKS 45.127.34.193:1081",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 143.20.134.225:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}