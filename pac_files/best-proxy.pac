function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:37133",
        "SOCKS 89.58.45.94:28809",
        "SOCKS 77.238.228.178:10808",
        "SOCKS 148.135.122.52:1111",
        "SOCKS 157.180.121.252:38897",
        "SOCKS 89.58.45.94:26749",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 89.58.45.94:15783",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 117.74.65.207:80",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 72.10.160.174:8717",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 89.58.45.94:10025",
        "SOCKS 119.75.57.106:33333",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}