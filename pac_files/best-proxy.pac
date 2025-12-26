function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 76.173.146.34:33613",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 87.107.48.225:1080",
        "SOCKS 38.158.83.241:999",
        "SOCKS 178.217.101.90:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 192.252.209.158:4145",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 45.144.234.129:52957",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 103.148.113.1:8199",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 170.239.41.229:4601",
        "SOCKS 47.236.20.209:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}