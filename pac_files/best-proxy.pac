function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.128.33.60:53405",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 1.54.175.15:16000",
        "SOCKS 8.222.141.243:1111",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 23.94.236.141:8080",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 165.225.72.38:11719",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 1.54.69.36:16000",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 95.47.239.65:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}