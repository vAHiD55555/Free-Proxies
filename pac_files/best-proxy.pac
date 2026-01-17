function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.208.16.9:9992",
        "SOCKS 78.12.143.148:20000",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 43.209.8.12:93",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 164.163.40.1:10000",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 8.130.37.235:3128",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 212.108.115.83:8080",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 78.12.223.246:2724",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}