function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.155.254:9080",
        "SOCKS 45.74.31.25:13920",
        "SOCKS 45.74.31.30:7304",
        "SOCKS 45.74.31.30:7074",
        "SOCKS 192.99.152.131:8888",
        "SOCKS 216.105.128.144:4145",
        "SOCKS 45.74.31.42:15280",
        "SOCKS 45.74.31.42:4403",
        "SOCKS 45.74.31.25:4973",
        "SOCKS 221.176.85.228:1080",
        "SOCKS 45.74.31.25:15686",
        "SOCKS 45.74.31.22:13469",
        "SOCKS 45.74.31.30:10527",
        "SOCKS 94.228.245.10:1080",
        "SOCKS 45.74.31.42:13348",
        "SOCKS 45.74.31.22:10401",
        "SOCKS 45.74.31.42:20569",
        "SOCKS 45.74.31.30:9982",
        "SOCKS 45.74.31.30:35031",
        "SOCKS 45.74.31.25:7984",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}