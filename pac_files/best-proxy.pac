function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.228.212.223:29272",
        "SOCKS 89.58.45.94:11571",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 117.74.65.207:443",
        "SOCKS 89.58.45.94:14485",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 94.43.164.242:8080",
        "SOCKS 89.58.45.94:32217",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 91.103.253.240:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 185.128.240.77:8080",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 216.185.57.251:443",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 89.58.45.94:10083",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}