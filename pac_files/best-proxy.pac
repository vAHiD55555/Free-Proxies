function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.229:8044",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 103.28.121.58:80",
        "SOCKS 169.57.157.148:80",
        "SOCKS 95.71.177.213:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 206.123.156.220:16423",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 206.123.156.204:4298",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}