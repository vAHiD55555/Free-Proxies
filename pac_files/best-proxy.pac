function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:58579",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 201.217.28.203:88",
        "SOCKS 135.181.203.208:80",
        "SOCKS 171.238.88.27:1046",
        "SOCKS 171.238.89.141:1088",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 171.238.88.27:1088",
        "SOCKS 188.113.174.219:1080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 171.238.103.65:1088",
        "SOCKS 171.238.89.141:1040",
        "SOCKS 157.66.16.63:8181",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 138.255.14.20:8080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 171.238.88.27:1040",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}