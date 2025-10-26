function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.89.68.78:9050",
        "SOCKS 185.93.89.180:5865",
        "SOCKS 78.47.219.204:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 185.93.89.180:5472",
        "SOCKS 185.93.89.180:4467",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 185.93.89.181:4237",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 152.53.36.101:13045",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 185.93.89.183:4443",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 79.101.37.78:3128",
        "SOCKS 185.93.89.147:8136",
        "SOCKS 185.93.89.181:10142",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}