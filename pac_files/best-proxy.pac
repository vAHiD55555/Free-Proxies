function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.56.118.144:3128",
        "SOCKS 123.54.197.16:23535",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 123.54.197.52:21634",
        "SOCKS 154.53.40.110:3128",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 123.54.197.21:20648",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 123.54.197.21:20191",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 123.54.197.52:23793",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}