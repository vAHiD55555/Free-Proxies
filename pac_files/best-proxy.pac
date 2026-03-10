function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.184.48.252:22222",
        "SOCKS 136.239.209.125:8080",
        "SOCKS 45.10.69.40:8888",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 124.105.79.237:8080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 202.47.188.191:8080",
        "SOCKS 138.2.47.198:1080",
        "SOCKS 123.57.0.163:8888",
        "SOCKS 8.212.165.164:5000",
        "SOCKS 206.123.156.182:12238",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 94.103.92.224:1080",
        "SOCKS 121.128.121.54:3128",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 123.54.197.51:21395",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}