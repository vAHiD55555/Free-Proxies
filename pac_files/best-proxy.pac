function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.99.100.108:3128",
        "SOCKS 188.242.163.28:21",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 37.255.203.235:8080",
        "SOCKS 150.241.107.234:1080",
        "SOCKS 131.153.163.222:50775",
        "SOCKS 89.208.103.186:9050",
        "SOCKS 85.192.60.41:1080",
        "SOCKS 138.124.59.186:1080",
        "SOCKS 192.248.95.98:54126",
        "SOCKS 46.30.41.59:9965",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 186.97.200.210:999",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 194.163.174.78:1088",
        "SOCKS 178.17.57.222:1080",
        "SOCKS 131.153.163.130:9050",
        "SOCKS 193.30.123.61:9050",
        "SOCKS 220.158.232.118:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}