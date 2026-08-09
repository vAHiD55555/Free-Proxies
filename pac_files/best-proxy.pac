function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.237.110.50:1080",
        "SOCKS 221.176.85.232:1080",
        "SOCKS 115.127.95.82:8080",
        "SOCKS 147.45.60.250:1082",
        "SOCKS 46.146.210.123:1080",
        "SOCKS 109.200.111.171:1080",
        "SOCKS 27.124.43.203:1080",
        "SOCKS 47.76.171.214:3128",
        "SOCKS 139.59.59.122:8118",
        "SOCKS 146.0.77.29:9050",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 217.175.47.2:1080",
        "SOCKS 194.233.79.120:1080",
        "SOCKS 47.238.185.110:9999",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 5.39.218.113:3128",
        "SOCKS 175.27.250.85:44042",
        "SOCKS 178.250.156.112:443",
        "SOCKS 46.37.123.166:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}