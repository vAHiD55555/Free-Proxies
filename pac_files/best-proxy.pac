function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.253.95.241:1083",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 13.140.164.179:3504",
        "SOCKS 49.0.0.175:1080",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 43.134.21.118:7890",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 8.212.165.164:80",
        "SOCKS 8.220.136.174:9002",
        "SOCKS 176.226.227.148:10808",
        "SOCKS 5.189.159.180:80",
        "SOCKS 216.106.179.216:49430",
        "SOCKS 13.140.164.179:3055",
        "SOCKS 188.93.140.146:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 8.220.136.174:89",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 169.58.85.194:8080",
        "SOCKS 49.235.161.213:2080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}