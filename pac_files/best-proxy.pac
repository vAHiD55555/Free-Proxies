function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 194.219.112.106:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 58.19.55.17:15098",
        "SOCKS 35.180.188.216:80",
        "SOCKS 206.123.156.199:5653",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 206.123.156.192:9928",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 37.27.100.112:443",
        "SOCKS 102.0.18.198:8080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 58.19.55.17:15096",
        "SOCKS 177.11.49.41:1088",
        "SOCKS 146.235.19.84:10814",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}