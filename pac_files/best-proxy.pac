function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 190.12.150.244:999",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 115.127.180.102:2589",
        "SOCKS 192.145.31.78:8080",
        "SOCKS 91.187.113.68:8080",
        "SOCKS 121.230.9.196:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 160.20.55.230:8080",
        "SOCKS 89.108.83.137:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 177.234.217.237:999",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 115.127.178.54:2589",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}