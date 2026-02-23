function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:39452",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 78.12.143.148:24167",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 146.235.19.84:10837",
        "SOCKS 213.35.110.67:10872",
        "SOCKS 123.54.197.20:21533",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 61.72.110.44:3128",
        "SOCKS 14.56.177.86:3128",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 107.174.63.44:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}