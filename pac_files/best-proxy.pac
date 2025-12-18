function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.208.162.142:40001",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 194.87.77.22:80",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 78.12.220.164:32090",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 45.123.142.77:8181",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 184.95.235.194:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 165.227.104.122:48500",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}