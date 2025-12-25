function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.157.34.94:1777",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 128.140.76.145:33187",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 106.13.58.110:8888",
        "SOCKS 45.87.140.155:8080",
        "SOCKS 103.133.26.11:8080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 82.115.24.134:9090",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 217.217.254.94:80",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 80.253.246.238:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}