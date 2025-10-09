function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.124.230.43:19445",
        "SOCKS 27.72.100.236:4995",
        "SOCKS 94.102.198.90:8080",
        "SOCKS 103.184.50.102:9090",
        "SOCKS 72.10.160.92:16287",
        "SOCKS 103.76.109.201:8083",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 103.226.232.205:8099",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 112.198.178.194:8080",
        "SOCKS 146.190.82.119:3128",
        "SOCKS 147.75.34.105:443",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 34.141.27.50:3128",
        "SOCKS 47.79.43.52:1122",
        "SOCKS 78.12.220.164:9174",
        "SOCKS 72.10.160.170:13701",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}