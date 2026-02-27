function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.180.140.254:1080",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 61.72.221.94:3128",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 61.72.221.124:3128",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 125.128.12.44:3128",
        "SOCKS 87.117.11.57:1080",
        "SOCKS 159.65.230.91:20537",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 159.65.230.91:20754",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 159.65.230.91:20725",
        "SOCKS 159.65.230.91:20815",
        "SOCKS 37.27.100.102:443",
        "SOCKS 85.208.108.43:10808",
        "SOCKS 45.140.147.82:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}