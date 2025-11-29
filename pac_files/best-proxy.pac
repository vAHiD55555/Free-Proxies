function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.87.77.22:80",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 43.153.64.222:14591",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 117.74.65.207:80",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 152.53.36.101:11001",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 157.180.121.252:46083",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 152.53.36.101:45842",
        "SOCKS 205.185.116.159:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}