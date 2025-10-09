function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 187.1.170.97:8088",
        "SOCKS 103.72.89.27:8097",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 47.79.94.78:1122",
        "SOCKS 43.208.240.77:318",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 103.19.130.50:8080",
        "SOCKS 185.93.89.144:4003",
        "SOCKS 165.16.29.253:2020",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 90.68.150.113:4321",
        "SOCKS 135.125.97.184:46107",
        "SOCKS 103.93.93.178:8181",
        "SOCKS 117.161.170.163:9174",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 179.60.53.26:999",
        "SOCKS 88.216.98.211:53983",
        "SOCKS 42.96.16.176:1312",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}