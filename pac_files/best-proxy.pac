function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 146.56.191.98:19422",
        "SOCKS 3.238.2.73:443",
        "SOCKS 31.76.15.189:1080",
        "SOCKS 102.204.14.2:8080",
        "SOCKS 144.31.75.29:1080",
        "SOCKS 118.145.141.251:44151",
        "SOCKS 120.133.82.62:44158",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 216.22.13.244:1081",
        "SOCKS 118.145.141.251:44234",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 185.170.10.176:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 118.145.141.251:44136",
        "SOCKS 85.174.84.22:1080",
        "SOCKS 38.147.172.70:10808",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 118.145.141.251:44045",
        "SOCKS 65.109.65.238:28080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}