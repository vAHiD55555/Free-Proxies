function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.80.1:9090",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 204.199.140.23:999",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 78.186.19.198:3310",
        "SOCKS 152.53.36.101:53803",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 43.229.79.217:3128",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 152.53.36.101:32117",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 8.211.194.85:8999",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 67.43.228.251:10673",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 147.75.34.92:9443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}