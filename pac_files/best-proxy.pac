function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.216.224.108:8192",
        "SOCKS 152.53.36.101:57669",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 202.40.178.234:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 45.40.136.39:45741",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 37.221.193.221:11193",
        "SOCKS 104.37.175.200:22292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}