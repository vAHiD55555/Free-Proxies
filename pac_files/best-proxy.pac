function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.194.217.97:1080",
        "SOCKS 154.64.232.9:58367",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 3.24.178.81:80",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 123.54.197.16:20188",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 35.180.188.216:80",
        "SOCKS 169.57.157.148:80",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 123.54.197.21:20629",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 168.235.110.63:3128",
        "SOCKS 79.110.52.252:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}