function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.215:9528",
        "SOCKS 123.54.197.51:23273",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 195.19.49.8:1080",
        "SOCKS 213.165.58.5:1080",
        "SOCKS 45.136.130.191:8443",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 123.54.197.20:22198",
        "SOCKS 213.165.58.7:1080",
        "SOCKS 185.41.152.110:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}