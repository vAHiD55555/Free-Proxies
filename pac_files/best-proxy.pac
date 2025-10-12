function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.253:3881",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 5.63.50.53:3128",
        "SOCKS 34.216.224.9:12542",
        "SOCKS 34.222.65.100:1976",
        "SOCKS 148.178.124.75:8888",
        "SOCKS 162.243.149.86:31028",
        "SOCKS 43.249.174.163:8118",
        "SOCKS 210.211.101.120:30000",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 43.129.234.168:1080",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 103.133.68.43:8080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 45.174.94.26:999",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 8.220.205.172:80",
        "SOCKS 148.178.125.51:8888",
        "SOCKS 72.10.160.173:24063",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}