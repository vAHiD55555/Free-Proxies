function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:4669",
        "SOCKS 45.74.31.42:4204",
        "SOCKS 116.103.20.166:5003",
        "SOCKS 45.74.31.42:13665",
        "SOCKS 45.74.31.42:11851",
        "SOCKS 45.74.31.30:4355",
        "SOCKS 8.219.229.53:84",
        "SOCKS 45.74.31.42:14694",
        "SOCKS 45.74.31.42:11080",
        "SOCKS 45.74.31.30:8073",
        "SOCKS 45.74.31.42:12224",
        "SOCKS 45.74.31.30:4164",
        "SOCKS 151.243.153.157:8118",
        "SOCKS 45.74.31.30:8720",
        "SOCKS 45.74.31.42:4383",
        "SOCKS 45.74.31.42:4313",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 203.189.135.105:1080",
        "SOCKS 45.74.31.30:5806",
        "SOCKS 45.74.31.42:5352",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}