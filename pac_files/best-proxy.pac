function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.99.49.187:20002",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 77.246.111.238:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 206.123.156.200:6138",
        "SOCKS 206.123.156.217:4544",
        "SOCKS 13.70.6.6:50161",
        "SOCKS 213.230.110.191:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 213.165.58.7:1080",
        "SOCKS 37.187.109.70:10111",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 206.123.156.204:6262",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 149.62.186.244:1080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 206.123.156.216:21446",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}