function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.199.166.251:9061",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 62.60.131.205:4369",
        "SOCKS 62.60.131.253:4133",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 110.44.115.83:8080",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 3.24.178.81:80",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 62.60.131.253:5317",
        "SOCKS 62.60.131.204:4257",
        "SOCKS 62.60.131.205:19541",
        "SOCKS 36.255.98.165:16097",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 41.250.212.122:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}