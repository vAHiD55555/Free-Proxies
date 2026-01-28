function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.56.98:19190",
        "SOCKS 185.155.99.114:8118",
        "SOCKS 88.99.26.79:5072",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 88.99.27.22:5082",
        "SOCKS 62.60.131.204:4642",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 217.77.102.18:3128",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 171.254.94.125:8088",
        "SOCKS 103.28.121.58:80",
        "SOCKS 36.255.98.168:4017",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 139.162.78.109:8080",
        "SOCKS 36.255.98.160:6690",
        "SOCKS 36.255.98.167:4144",
        "SOCKS 51.15.223.12:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}