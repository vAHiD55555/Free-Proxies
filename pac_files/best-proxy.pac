function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 23.94.63.140:21080",
        "SOCKS 103.156.14.15:8080",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 37.221.193.221:19975",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 143.198.202.188:8888",
        "SOCKS 37.221.193.221:35273",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 152.53.171.242:55533",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 152.53.36.101:11217",
        "SOCKS 116.129.250.48:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 45.188.167.25:999",
        "SOCKS 37.221.193.221:49587",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}