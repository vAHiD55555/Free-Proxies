function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 41.65.160.172:1977",
        "SOCKS 38.194.246.34:999",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 90.156.231.48:1080",
        "SOCKS 162.218.112.60:60001",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 46.146.204.175:1080",
        "SOCKS 89.58.45.94:44015",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 157.180.121.252:48705",
        "SOCKS 89.58.45.94:12496",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 89.58.45.94:17047",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 89.58.45.94:10145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}