function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 78.12.220.164:117",
        "SOCKS 13.231.104.180:3128",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 62.60.131.204:19543",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 62.60.131.203:5131",
        "SOCKS 36.255.98.168:4481",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 156.239.52.126:8081",
        "SOCKS 139.59.1.14:80",
        "SOCKS 36.255.98.153:5441",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 62.60.131.204:5091",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 36.255.98.160:4226",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 165.227.104.122:48500",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}