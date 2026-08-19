function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.40.136.39:45741",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 47.91.120.190:3128",
        "SOCKS 188.242.163.28:21",
        "SOCKS 8.213.156.191:86",
        "SOCKS 81.0.49.104:18500",
        "SOCKS 194.163.174.78:1081",
        "SOCKS 47.91.120.190:1080",
        "SOCKS 195.160.223.99:9050",
        "SOCKS 78.109.137.53:1080",
        "SOCKS 66.59.197.62:3128",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 94.139.179.56:10809",
        "SOCKS 46.173.26.104:1080",
        "SOCKS 102.211.56.106:9051",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 201.165.172.14:1080",
        "SOCKS 45.95.232.35:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}