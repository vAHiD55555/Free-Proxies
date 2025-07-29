function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.104.152:49981",
        "SOCKS 47.251.43.115:33333",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 183.80.23.68:16000",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 45.91.201.100:8082",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 58.187.71.86:16000",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 183.80.22.206:16000",
        "SOCKS 178.178.100.188:8080",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 117.252.95.60:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}