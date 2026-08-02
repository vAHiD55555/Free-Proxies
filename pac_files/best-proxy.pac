function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 192.163.200.93:17071",
        "SOCKS 103.179.189.64:9191",
        "SOCKS 144.31.222.106:7890",
        "SOCKS 103.151.75.21:2025",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 94.198.218.123:1080",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 82.29.197.201:1080",
        "SOCKS 45.4.136.106:10801",
        "SOCKS 185.209.29.226:1080",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 45.61.188.134:44499",
        "SOCKS 131.153.163.130:56077",
        "SOCKS 47.82.123.15:1011",
        "SOCKS 47.82.112.38:1080",
        "SOCKS 147.15.17.132:1082",
        "SOCKS 103.55.63.14:1080",
        "SOCKS 149.129.225.235:7777",
        "SOCKS 2.56.178.88:808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}