function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.40:4145",
        "SOCKS 47.245.117.43:80",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 190.94.213.23:999",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 49.49.56.129:8080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 218.64.122.99:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}