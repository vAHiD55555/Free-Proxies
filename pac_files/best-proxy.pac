function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 24.249.199.4:4145",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 90.156.197.189:8080",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 170.233.30.33:4153",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 201.139.115.206:8081",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 8.218.96.249:1111",
        "SOCKS 45.230.170.30:999",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 165.227.174.249:33080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}