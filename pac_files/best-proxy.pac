function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 18.135.100.214:3128",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 42.118.0.67:16000",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 116.105.220.194:10002",
        "SOCKS 1.55.192.232:16000",
        "SOCKS 1.55.59.212:16000",
        "SOCKS 104.247.171.77:2071",
        "SOCKS 34.215.51.159:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}