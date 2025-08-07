function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.16.77.50:3128",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 27.79.171.61:16000",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 116.98.183.148:1010",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 123.21.22.111:1010",
        "SOCKS 27.79.175.79:16000",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 117.161.170.163:9009",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 27.79.215.129:16000",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 188.227.224.110:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}