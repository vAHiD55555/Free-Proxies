function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.224.10.43:6667",
        "SOCKS 95.47.239.65:3128",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 147.75.34.105:443",
        "SOCKS 185.93.89.182:4269",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 103.133.68.43:8080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 157.15.63.86:8080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 103.81.194.17:8080",
        "SOCKS 8.222.247.161:1011",
        "SOCKS 116.105.27.106:10040",
        "SOCKS 47.79.91.116:1122",
        "SOCKS 8.219.172.7:1011",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 34.92.88.81:33333",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}