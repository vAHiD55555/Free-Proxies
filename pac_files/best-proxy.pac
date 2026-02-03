function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.74.226.8:5001",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 36.255.98.168:4023",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 36.255.98.161:4126",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 152.53.171.242:30070",
        "SOCKS 5.75.168.247:8023",
        "SOCKS 62.60.131.253:4295",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 5.129.253.135:10808",
        "SOCKS 115.136.121.54:9050",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 35.180.188.216:80",
        "SOCKS 149.202.75.85:36666",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}