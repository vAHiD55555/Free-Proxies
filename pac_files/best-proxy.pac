function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.59.1.14:1080",
        "SOCKS 45.70.202.161:999",
        "SOCKS 34.216.224.9:12542",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 47.91.115.179:9098",
        "SOCKS 190.145.227.114:999",
        "SOCKS 179.96.28.58:80",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 8.211.200.183:9098",
        "SOCKS 181.78.44.63:999",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 95.70.235.241:8080",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 47.79.94.191:1122",
        "SOCKS 103.69.106.158:8181",
        "SOCKS 141.136.63.126:8080",
        "SOCKS 47.79.94.72:1122",
        "SOCKS 62.255.223.195:8080",
        "SOCKS 103.139.98.169:8080",
        "SOCKS 182.160.105.46:14157",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}