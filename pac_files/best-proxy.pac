function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.133.137:3128",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 36.255.98.167:4144",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 62.60.131.205:5441",
        "SOCKS 62.60.131.204:4257",
        "SOCKS 5.199.166.251:9061",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 62.60.131.205:4844",
        "SOCKS 54.90.159.174:22229",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 81.177.166.169:10808",
        "SOCKS 62.60.131.188:5201",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 120.77.203.0:443",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 36.255.98.184:8858",
        "SOCKS 13.229.107.106:80",
        "SOCKS 36.255.98.161:15569",
        "SOCKS 39.170.85.129:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}