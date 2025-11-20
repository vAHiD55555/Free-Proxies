function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 168.253.92.93:10808",
        "SOCKS 152.53.36.101:11673",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 152.53.171.242:10985",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 152.53.171.242:31031",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 207.248.3.81:999",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 35.77.72.200:3128",
        "SOCKS 152.53.36.101:51193",
        "SOCKS 43.207.44.234:3128",
        "SOCKS 152.53.36.101:18181",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 43.224.8.116:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}