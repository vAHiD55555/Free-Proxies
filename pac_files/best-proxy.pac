function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.145:2005",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 38.145.208.247:8443",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 38.145.220.14:8443",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 38.145.220.32:8447",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 109.238.14.123:52663",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}