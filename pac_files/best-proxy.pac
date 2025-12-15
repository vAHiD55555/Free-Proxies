function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.72:5719",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 43.225.151.134:1121",
        "SOCKS 72.10.160.93:7741",
        "SOCKS 91.184.253.97:8888",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 43.161.250.102:8080",
        "SOCKS 115.127.112.34:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 103.109.212.85:8428",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 115.127.178.186:2026",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 103.129.200.2:8124",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}