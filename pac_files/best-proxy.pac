function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 111.61.73.175:7302",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 115.127.178.34:2589",
        "SOCKS 202.62.59.218:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 184.170.251.30:11288",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 206.27.173.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}