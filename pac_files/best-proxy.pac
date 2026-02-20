function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:39452",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 123.54.197.52:20940",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 8.210.54.203:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 125.141.139.110:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}