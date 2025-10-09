function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.151.22.26:8082",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 66.29.156.102:8080",
        "SOCKS 92.113.150.5:1080",
        "SOCKS 207.248.115.114:999",
        "SOCKS 41.33.203.227:1976",
        "SOCKS 177.234.194.30:999",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 95.158.15.161:8080",
        "SOCKS 118.179.5.177:6248",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 72.10.160.92:16287",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 103.171.82.213:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}