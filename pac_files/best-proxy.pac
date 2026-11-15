function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.225.48.68:8989",
        "SOCKS 177.37.175.169:1080",
        "SOCKS 185.95.165.114:1080",
        "SOCKS 45.74.31.40:4751",
        "SOCKS 45.74.31.42:14962",
        "SOCKS 212.87.198.146:1080",
        "SOCKS 147.45.72.212:44816",
        "SOCKS 77.239.108.222:11051",
        "SOCKS 45.74.31.42:44374",
        "SOCKS 45.74.31.40:5052",
        "SOCKS 49.13.22.249:10803",
        "SOCKS 43.133.54.152:7890",
        "SOCKS 211.92.81.156:1080",
        "SOCKS 171.245.71.194:1108",
        "SOCKS 154.219.112.69:1080",
        "SOCKS 45.74.31.40:4183",
        "SOCKS 45.74.31.47:9487",
        "SOCKS 141.98.188.251:9050",
        "SOCKS 77.81.230.90:9050",
        "SOCKS 89.189.92.253:10800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}