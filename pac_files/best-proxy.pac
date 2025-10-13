function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.10.209.230:8080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 185.130.226.55:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 34.222.65.100:1976",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 114.80.36.171:3081",
        "SOCKS 113.183.43.123:8080",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 47.79.94.34:1122",
        "SOCKS 159.13.44.239:8080",
        "SOCKS 8.211.200.183:9098",
        "SOCKS 62.213.13.54:3128",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 60.13.42.157:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}