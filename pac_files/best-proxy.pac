function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.144.74.156:3620",
        "SOCKS 47.83.8.254:1100",
        "SOCKS 152.53.36.101:18749",
        "SOCKS 107.174.82.16:21080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 152.53.171.242:24649",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 152.53.36.101:50383",
        "SOCKS 89.58.45.94:56789",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 89.58.45.94:23063",
        "SOCKS 37.221.193.221:10025",
        "SOCKS 152.53.171.242:38027",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}