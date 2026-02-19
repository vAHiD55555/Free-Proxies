function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.248.191.117:1080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 123.54.197.20:22001",
        "SOCKS 202.152.44.19:8081",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 123.54.197.18:23384",
        "SOCKS 202.152.44.18:8081",
        "SOCKS 123.54.197.20:23781",
        "SOCKS 123.54.197.52:23672",
        "SOCKS 123.54.197.51:20878",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 123.54.197.49:22622",
        "SOCKS 123.54.197.52:20230",
        "SOCKS 123.54.197.52:23921",
        "SOCKS 217.76.245.80:999",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 123.54.197.52:20573",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}