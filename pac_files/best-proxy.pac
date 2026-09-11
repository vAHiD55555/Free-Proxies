function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.43.194.184:1080",
        "SOCKS 45.74.31.30:33294",
        "SOCKS 193.233.199.21:1080",
        "SOCKS 185.93.104.246:1080",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 209.182.234.151:40000",
        "SOCKS 45.194.41.141:8080",
        "SOCKS 45.74.31.42:4380",
        "SOCKS 45.74.31.42:11104",
        "SOCKS 45.74.31.30:5455",
        "SOCKS 104.154.186.48:80",
        "SOCKS 174.138.162.35:54007",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 45.74.31.30:4502",
        "SOCKS 45.74.31.42:12102",
        "SOCKS 45.74.31.42:4433",
        "SOCKS 45.74.31.42:4270",
        "SOCKS 45.74.31.42:11677",
        "SOCKS 45.74.31.42:9173",
        "SOCKS 59.46.216.131:30001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}