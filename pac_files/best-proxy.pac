function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 82.102.11.164:3460",
        "SOCKS 91.90.121.44:9050",
        "SOCKS 118.145.141.251:44083",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 145.241.233.71:1080",
        "SOCKS 130.162.141.185:52916",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 156.225.64.114:1080",
        "SOCKS 45.74.31.30:7886",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 118.145.141.251:44228",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 103.102.12.22:8000",
        "SOCKS 44.193.20.213:443",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 165.16.192.81:1080",
        "SOCKS 47.82.80.23:1011",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 118.145.141.251:44160",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}