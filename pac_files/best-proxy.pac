function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 131.153.163.130:30059",
        "SOCKS 46.30.41.59:9955",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 161.97.153.238:9050",
        "SOCKS 138.124.93.91:9081",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 89.169.37.254:1080",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 38.127.179.219:41923",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 47.82.70.164:1011",
        "SOCKS 109.199.107.68:1080",
        "SOCKS 221.237.25.204:1080",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 70.34.252.68:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 76.144.40.133:9051",
        "SOCKS 93.118.127.222:1080",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 95.216.170.155:9082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}