function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.180:10349",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 41.250.212.122:3128",
        "SOCKS 62.60.131.205:4091",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 3.112.125.130:3128",
        "SOCKS 62.60.131.203:5204",
        "SOCKS 139.162.78.109:8080",
        "SOCKS 62.60.131.204:14150",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 62.60.131.204:5498",
        "SOCKS 103.28.121.58:80",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 62.60.131.253:6347",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}