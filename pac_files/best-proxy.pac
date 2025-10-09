function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.180:4599",
        "SOCKS 103.19.130.50:8080",
        "SOCKS 20.252.53.196:3128",
        "SOCKS 14.234.140.166:20399",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 103.156.86.49:8080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 135.125.97.184:46107",
        "SOCKS 185.93.89.168:4322",
        "SOCKS 199.188.204.105:8080",
        "SOCKS 14.103.144.65:8888",
        "SOCKS 179.60.53.26:999",
        "SOCKS 103.1.93.184:55443",
        "SOCKS 107.152.45.72:8888",
        "SOCKS 103.68.233.142:8097",
        "SOCKS 67.43.228.251:9105",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}