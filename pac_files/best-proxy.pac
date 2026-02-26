function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.34.95.110:8080",
        "SOCKS 213.230.110.191:3128",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 61.72.221.144:3128",
        "SOCKS 103.118.41.198:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 4.157.215.139:3128",
        "SOCKS 152.32.255.24:27197",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 147.45.159.213:48206",
        "SOCKS 44.205.216.127:80",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 193.32.178.160:57329",
        "SOCKS 51.15.210.79:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}