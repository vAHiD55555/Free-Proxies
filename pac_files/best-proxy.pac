function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:6674",
        "SOCKS 45.74.31.41:18463",
        "SOCKS 45.74.31.42:4039",
        "SOCKS 45.74.31.42:10658",
        "SOCKS 45.74.31.30:9106",
        "SOCKS 45.74.31.30:9478",
        "SOCKS 45.74.31.42:28410",
        "SOCKS 103.55.63.14:1080",
        "SOCKS 45.74.31.42:28639",
        "SOCKS 45.74.31.30:7189",
        "SOCKS 143.246.197.187:1080",
        "SOCKS 45.74.31.42:11052",
        "SOCKS 45.74.31.42:23843",
        "SOCKS 45.74.31.42:4572",
        "SOCKS 45.74.31.41:10001",
        "SOCKS 91.107.243.254:9091",
        "SOCKS 120.133.82.62:44153",
        "SOCKS 45.74.31.30:5329",
        "SOCKS 45.179.145.12:6080",
        "SOCKS 45.74.31.42:4785",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}