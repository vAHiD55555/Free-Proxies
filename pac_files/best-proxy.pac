function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.27.75:1100",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 106.52.2.26:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}