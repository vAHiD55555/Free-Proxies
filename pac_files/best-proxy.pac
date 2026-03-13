function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.51:23152",
        "SOCKS 123.54.197.53:22320",
        "SOCKS 123.54.197.20:23561",
        "SOCKS 193.47.43.176:1080",
        "SOCKS 212.48.134.145:1080",
        "SOCKS 123.54.197.19:22879",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 123.54.197.20:21908",
        "SOCKS 47.83.199.137:58367",
        "SOCKS 123.54.197.53:22124",
        "SOCKS 194.233.68.54:1088",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 123.54.197.20:22743",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.13.134.202:1080",
        "SOCKS 212.48.150.38:1080",
        "SOCKS 213.202.225.11:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 213.165.58.6:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}