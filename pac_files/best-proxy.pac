function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.238.60.156:9080",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 195.19.51.20:1080",
        "SOCKS 216.106.179.216:49291",
        "SOCKS 46.146.223.102:1080",
        "SOCKS 119.28.64.217:50161",
        "SOCKS 138.124.102.98:1082",
        "SOCKS 47.237.92.86:50",
        "SOCKS 43.156.70.98:8080",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 95.105.28.76:1080",
        "SOCKS 47.237.110.50:1080",
        "SOCKS 187.86.59.122:80",
        "SOCKS 109.191.10.98:1080",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 109.238.95.167:31075",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 175.27.250.85:44092",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}