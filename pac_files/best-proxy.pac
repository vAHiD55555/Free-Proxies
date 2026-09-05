function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.9.185.33:1080",
        "SOCKS 72.56.106.48:443",
        "SOCKS 92.118.126.84:1080",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 84.22.132.84:1080",
        "SOCKS 167.172.67.35:1080",
        "SOCKS 45.139.77.195:1080",
        "SOCKS 146.190.60.147:8007",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 185.236.22.192:9050",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 2.56.178.88:808",
        "SOCKS 45.74.31.30:4263",
        "SOCKS 66.42.59.208:10808",
        "SOCKS 124.41.225.101:1080",
        "SOCKS 158.101.8.92:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 45.74.31.30:4923",
        "SOCKS 45.74.31.30:39404",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}