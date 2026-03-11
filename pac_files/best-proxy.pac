function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 39.170.85.129:7302",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 193.168.173.136:443",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 190.97.239.21:999",
        "SOCKS 181.78.194.249:999",
        "SOCKS 203.205.33.131:1452",
        "SOCKS 173.249.5.133:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 94.103.92.224:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 62.217.176.47:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 47.91.65.23:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}