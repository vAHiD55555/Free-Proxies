function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.185.80.58:1088",
        "SOCKS 103.6.235.13:5555",
        "SOCKS 31.76.15.189:1080",
        "SOCKS 118.145.141.251:44201",
        "SOCKS 118.145.141.251:44064",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 185.193.25.181:9050",
        "SOCKS 46.173.26.104:1080",
        "SOCKS 85.198.81.83:1080",
        "SOCKS 90.8.144.108:3317",
        "SOCKS 139.59.122.219:9050",
        "SOCKS 103.66.46.150:69",
        "SOCKS 144.31.222.106:7890",
        "SOCKS 118.145.141.251:44160",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 59.36.210.211:13552",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 118.70.151.55:1080",
        "SOCKS 43.156.201.214:2080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}