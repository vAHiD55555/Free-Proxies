function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.182.233.70:7302",
        "SOCKS 123.54.197.16:23579",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 18.229.170.122:3128",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 123.54.197.21:20956",
        "SOCKS 123.54.197.21:20737",
        "SOCKS 18.100.155.47:3128",
        "SOCKS 123.54.197.17:21961",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 120.77.203.0:443",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 193.242.106.191:1080",
        "SOCKS 35.212.218.202:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 103.135.102.161:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}