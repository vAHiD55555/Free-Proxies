function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.87.76.214:9050",
        "SOCKS 213.111.146.36:18080",
        "SOCKS 45.74.31.46:5646",
        "SOCKS 38.60.157.33:1080",
        "SOCKS 45.74.31.42:8684",
        "SOCKS 45.74.31.41:11674",
        "SOCKS 185.232.205.31:1080",
        "SOCKS 207.189.130.169:1080",
        "SOCKS 5.39.34.87:60000",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 174.138.161.187:58208",
        "SOCKS 147.189.169.226:9050",
        "SOCKS 75.140.241.122:1080",
        "SOCKS 45.74.31.41:9584",
        "SOCKS 45.74.31.41:9306",
        "SOCKS 45.74.31.42:12953",
        "SOCKS 152.70.107.226:1080",
        "SOCKS 176.122.74.108:1080",
        "SOCKS 69.174.54.5:16052",
        "SOCKS 82.117.78.58:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}