function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.76.39.215:7777",
        "SOCKS 206.123.156.197:4044",
        "SOCKS 13.61.155.35:1720",
        "SOCKS 38.145.208.253:8443",
        "SOCKS 128.90.49.77:1080",
        "SOCKS 38.145.208.188:8443",
        "SOCKS 113.160.132.26:8080",
        "SOCKS 38.34.183.130:8443",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 206.123.156.187:4965",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 206.123.156.221:9119",
        "SOCKS 111.224.193.139:33333",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 38.145.220.34:8443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}