function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.59.225.188:12827",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 186.96.50.113:999",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 72.240.9.63:80",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 121.40.231.103:7890",
        "SOCKS 18.141.177.23:80",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 115.127.176.222:2589",
        "SOCKS 45.70.85.33:58080",
        "SOCKS 124.248.177.91:1080",
        "SOCKS 202.62.59.216:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}