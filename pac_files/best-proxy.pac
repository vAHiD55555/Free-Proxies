function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.254.99.183:8118",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 116.98.185.71:1004",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 103.172.42.187:1111",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 123.20.7.8:1001",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 125.103.83.163:8118",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 77.225.198.220:9812",
        "SOCKS 37.187.29.43:37666",
        "SOCKS 103.18.77.25:1111",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 184.178.172.5:15303",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}