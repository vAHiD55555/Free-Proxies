function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.225.148.210:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 185.93.89.180:9128",
        "SOCKS 181.215.243.104:4262",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 43.198.185.30:9990",
        "SOCKS 172.99.189.39:15604",
        "SOCKS 185.93.89.144:20020",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 152.53.36.101:23713",
        "SOCKS 16.78.104.244:9078",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 185.93.89.180:6321",
        "SOCKS 185.93.89.144:4571",
        "SOCKS 103.70.79.3:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}