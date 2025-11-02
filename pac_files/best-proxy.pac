function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.143.164.213:1080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 117.74.65.207:80",
        "SOCKS 202.40.178.234:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 116.97.164.107:1003",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 72.10.160.174:2841",
        "SOCKS 47.91.104.88:3128",
        "SOCKS 202.5.59.97:6969",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 103.187.39.21:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}