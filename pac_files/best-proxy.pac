function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.190.24.138:8080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 62.60.131.199:21232",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 72.10.160.93:7741",
        "SOCKS 54.37.72.89:80",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 93.113.63.73:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 14.241.130.94:1452",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 67.43.236.18:25943",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 34.234.201.164:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}