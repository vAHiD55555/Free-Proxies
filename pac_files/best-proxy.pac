function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.140.113.110:8081",
        "SOCKS 45.77.6.22:443",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 202.40.190.74:1080",
        "SOCKS 45.144.53.63:5000",
        "SOCKS 113.160.132.26:8080",
        "SOCKS 159.65.166.126:8118",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 146.103.110.73:1080",
        "SOCKS 72.255.9.24:1080",
        "SOCKS 103.132.152.201:1452",
        "SOCKS 103.165.128.75:1080",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 37.16.25.108:1080",
        "SOCKS 49.0.0.175:1080",
        "SOCKS 213.188.203.54:1080",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 210.77.22.87:10808",
        "SOCKS 77.110.102.252:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}