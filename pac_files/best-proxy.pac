function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.180:13410",
        "SOCKS 62.60.131.253:11746",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 183.98.143.134:8697",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 62.60.131.203:4080",
        "SOCKS 45.88.0.98:3128",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 62.60.131.203:8031",
        "SOCKS 62.60.131.194:10086",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 62.60.131.191:4121",
        "SOCKS 185.26.180.180:80",
        "SOCKS 185.26.180.143:80",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 62.60.131.204:7224",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}