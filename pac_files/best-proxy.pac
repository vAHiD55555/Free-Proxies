function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.115.235.223:1080",
        "SOCKS 103.100.188.174:1080",
        "SOCKS 45.135.148.84:1080",
        "SOCKS 92.118.230.166:1088",
        "SOCKS 103.138.145.150:1999",
        "SOCKS 45.74.31.42:6642",
        "SOCKS 155.117.117.82:1080",
        "SOCKS 159.89.119.49:10000",
        "SOCKS 8.130.74.114:8080",
        "SOCKS 69.174.54.8:10000",
        "SOCKS 103.136.70.198:8888",
        "SOCKS 89.124.81.186:1082",
        "SOCKS 85.140.63.14:1080",
        "SOCKS 154.89.148.25:1080",
        "SOCKS 183.173.214.136:10808",
        "SOCKS 31.47.103.207:1080",
        "SOCKS 103.138.145.202:1999",
        "SOCKS 45.135.148.103:1080",
        "SOCKS 94.103.2.238:1080",
        "SOCKS 111.119.162.248:10950",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}