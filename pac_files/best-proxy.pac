function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.83.240.24:1011",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 38.159.62.7:999",
        "SOCKS 109.196.136.137:1080",
        "SOCKS 147.45.60.60:80",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 91.142.79.166:1080",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 8.220.205.172:1234",
        "SOCKS 110.235.249.88:1080",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 36.255.98.160:8378",
        "SOCKS 203.189.154.129:1080",
        "SOCKS 95.188.64.220:1080",
        "SOCKS 174.138.61.184:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}