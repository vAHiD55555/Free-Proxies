function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.198.82.207:1080",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 45.74.31.30:8888",
        "SOCKS 8.219.97.248:80",
        "SOCKS 103.55.63.14:1080",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 192.9.241.51:26568",
        "SOCKS 138.124.10.104:443",
        "SOCKS 217.12.209.4:1080",
        "SOCKS 118.145.141.251:44049",
        "SOCKS 118.145.141.251:44007",
        "SOCKS 118.145.141.251:44199",
        "SOCKS 45.74.31.42:8989",
        "SOCKS 140.245.238.56:53",
        "SOCKS 118.145.141.251:44194",
        "SOCKS 144.202.107.194:9150",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 154.91.176.171:1080",
        "SOCKS 118.145.141.251:44058",
        "SOCKS 147.45.221.111:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}