function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.252.11.233:9050",
        "SOCKS 47.245.117.43:80",
        "SOCKS 212.175.61.30:8080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 141.11.37.220:8080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 114.80.38.120:3081",
        "SOCKS 49.156.44.114:8080",
        "SOCKS 47.237.113.119:6379",
        "SOCKS 157.66.16.63:8181",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 183.164.226.253:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}