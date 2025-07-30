function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.76:4145",
        "SOCKS 8.212.161.91:1080",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 160.176.240.40:3128",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 164.90.193.32:3128",
        "SOCKS 47.90.205.231:33333",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 117.74.65.207:443",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}