function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 198.199.86.11:1080",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 45.90.216.103:8080",
        "SOCKS 171.228.47.183:30569",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 67.43.236.22:1549",
        "SOCKS 47.239.10.156:1100",
        "SOCKS 72.10.160.92:16287",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 103.108.60.141:1080",
        "SOCKS 171.244.129.3:3128",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 52.47.164.226:9304",
        "SOCKS 181.209.81.82:999",
        "SOCKS 103.174.178.138:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}