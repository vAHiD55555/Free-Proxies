function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 216.106.179.216:49397",
        "SOCKS 128.199.37.92:1080",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 78.141.217.146:9080",
        "SOCKS 61.9.32.30:58765",
        "SOCKS 178.208.66.47:8051",
        "SOCKS 202.95.15.6:1080",
        "SOCKS 80.66.72.152:888",
        "SOCKS 178.17.57.222:1080",
        "SOCKS 8.213.215.187:8008",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 140.238.28.230:10808",
        "SOCKS 38.175.197.50:5555",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 94.198.54.232:1080",
        "SOCKS 104.236.171.128:41047",
        "SOCKS 45.133.16.88:1080",
        "SOCKS 103.187.162.75:8199",
        "SOCKS 193.233.218.213:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}