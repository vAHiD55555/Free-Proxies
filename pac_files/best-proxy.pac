function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.190.100.170:999",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 61.49.87.3:80",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 178.130.47.129:1082",
        "SOCKS 37.120.162.180:13271",
        "SOCKS 78.12.230.52:10025",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 177.70.77.201:20183",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 161.35.98.249:39467",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}