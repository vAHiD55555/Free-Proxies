function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.88.104.126:3344",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 161.97.131.23:8899",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 164.163.40.1:10000",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 68.71.249.158:4145",
        "SOCKS 62.60.131.182:37351",
        "SOCKS 152.70.104.79:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 193.233.254.8:1080",
        "SOCKS 8.210.4.18:7779",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}