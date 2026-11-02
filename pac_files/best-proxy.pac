function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.47:6777",
        "SOCKS 45.74.31.40:6299",
        "SOCKS 212.55.99.157:1080",
        "SOCKS 144.76.61.252:1080",
        "SOCKS 185.246.155.9:8787",
        "SOCKS 45.74.31.41:7515",
        "SOCKS 45.74.31.41:16278",
        "SOCKS 52.1.121.155:6000",
        "SOCKS 45.74.31.40:10215",
        "SOCKS 222.252.175.80:20001",
        "SOCKS 78.110.155.229:1080",
        "SOCKS 45.74.31.41:5229",
        "SOCKS 45.74.31.47:5976",
        "SOCKS 185.121.133.221:1080",
        "SOCKS 160.25.83.52:1090",
        "SOCKS 85.172.81.216:1080",
        "SOCKS 176.197.114.86:1080",
        "SOCKS 45.74.31.47:5329",
        "SOCKS 45.74.31.40:4834",
        "SOCKS 45.74.31.46:5235",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}