function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.177:4237",
        "SOCKS 115.127.178.206:2589",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 212.34.135.52:5555",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 62.60.131.197:18686",
        "SOCKS 37.157.217.144:10810",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 36.255.98.167:7878",
        "SOCKS 38.194.224.134:1452",
        "SOCKS 45.90.217.123:1080",
        "SOCKS 54.90.159.174:22229",
        "SOCKS 36.255.98.177:9598",
        "SOCKS 185.54.178.193:1080",
        "SOCKS 125.141.133.49:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}