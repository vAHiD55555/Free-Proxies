function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.239.201.49:58765",
        "SOCKS 72.56.106.48:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 45.74.178.43:9080",
        "SOCKS 135.225.91.78:9072",
        "SOCKS 79.137.198.159:42771",
        "SOCKS 115.193.135.121:1080",
        "SOCKS 194.163.174.78:1089",
        "SOCKS 193.233.218.213:1080",
        "SOCKS 45.128.188.33:35860",
        "SOCKS 195.19.51.79:1080",
        "SOCKS 140.245.36.86:1080",
        "SOCKS 202.5.47.60:1080",
        "SOCKS 171.253.95.238:1081",
        "SOCKS 110.38.234.74:1256",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 194.164.125.208:57422",
        "SOCKS 165.154.3.4:10808",
        "SOCKS 209.182.234.151:40000",
        "SOCKS 88.218.206.170:5432",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}