function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.230.11.27:1080",
        "SOCKS 27.36.70.112:1080",
        "SOCKS 152.32.203.130:10808",
        "SOCKS 143.47.59.115:9050",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 8.211.49.86:7777",
        "SOCKS 194.87.147.132:1080",
        "SOCKS 216.106.179.216:49320",
        "SOCKS 18.170.25.193:7451",
        "SOCKS 178.250.156.112:443",
        "SOCKS 165.245.187.193:3128",
        "SOCKS 84.201.144.65:10008",
        "SOCKS 47.237.110.50:1080",
        "SOCKS 216.106.179.216:49302",
        "SOCKS 8.213.215.187:3000",
        "SOCKS 8.212.168.170:3129",
        "SOCKS 94.73.251.19:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 135.225.91.78:9080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}