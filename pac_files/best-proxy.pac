function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.32.203.130:10808",
        "SOCKS 139.59.122.219:9050",
        "SOCKS 116.254.118.180:80",
        "SOCKS 72.255.38.180:1080",
        "SOCKS 93.123.30.53:1080",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 85.122.120.119:30016",
        "SOCKS 212.33.250.53:1080",
        "SOCKS 171.249.163.170:1452",
        "SOCKS 144.21.39.252:1080",
        "SOCKS 93.90.231.101:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 34.101.184.164:3128",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 147.45.60.139:1082",
        "SOCKS 103.20.61.251:1080",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 144.124.253.249:1080",
        "SOCKS 144.91.82.211:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}