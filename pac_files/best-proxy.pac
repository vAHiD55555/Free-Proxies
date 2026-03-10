function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 68.183.90.210:59166",
        "SOCKS 47.91.104.88:3128",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 123.57.0.163:8888",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 206.123.156.228:10724",
        "SOCKS 85.198.98.179:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 186.180.66.138:8080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 80.87.108.127:1080",
        "SOCKS 87.229.205.227:8080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 195.123.211.251:8118",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 189.50.45.46:1995",
        "SOCKS 110.164.128.124:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}