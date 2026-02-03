function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:58331",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 135.181.203.208:80",
        "SOCKS 138.199.25.13:3907",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 152.53.171.242:27940",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 3.24.178.81:80",
        "SOCKS 94.31.176.234:10808",
        "SOCKS 36.255.98.154:4026",
        "SOCKS 5.129.216.47:1081",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 13.229.107.106:80",
        "SOCKS 185.44.232.30:53281",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}