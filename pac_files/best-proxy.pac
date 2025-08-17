function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.71.228.21:3128",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 65.108.251.40:57575",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 47.91.120.190:9098",
        "SOCKS 27.71.139.254:16000",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 45.166.93.113:999",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 188.227.224.110:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}