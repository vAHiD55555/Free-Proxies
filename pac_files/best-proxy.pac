function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.238.95.167:31075",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 192.252.208.70:14282",
        "SOCKS 216.106.179.216:49479",
        "SOCKS 5.104.206.191:1080",
        "SOCKS 34.84.162.206:38080",
        "SOCKS 103.169.254.155:1080",
        "SOCKS 8.211.170.91:14680",
        "SOCKS 188.166.120.48:1080",
        "SOCKS 165.154.3.4:10808",
        "SOCKS 58.186.168.155:1081",
        "SOCKS 38.253.88.242:999",
        "SOCKS 221.176.85.234:1080",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 38.41.0.116:999",
        "SOCKS 188.131.155.235:1088",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 188.92.28.76:1080",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 103.142.190.78:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}