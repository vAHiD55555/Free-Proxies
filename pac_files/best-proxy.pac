function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 40.176.96.235:8037",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 65.109.52.109:1080",
        "SOCKS 185.93.89.182:10072",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 185.93.89.155:4083",
        "SOCKS 185.93.89.187:8088",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 117.161.170.163:9025",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 45.186.248.120:3128",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 185.93.89.144:9606",
        "SOCKS 175.24.2.65:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}