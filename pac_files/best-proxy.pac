function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.56.177.12:3128",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 35.180.188.216:80",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 5.252.177.254:1080",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 35.92.49.136:1080",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 147.75.34.105:443",
        "SOCKS 203.25.208.163:1100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}