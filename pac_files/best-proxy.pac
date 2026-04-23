function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.66.165.154:7302",
        "SOCKS 58.19.55.88:15075",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 58.19.55.4:15071",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 188.43.32.130:8083",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 58.19.55.4:15244",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 58.19.55.4:15098",
        "SOCKS 58.19.55.88:15110",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 85.187.224.21:8080",
        "SOCKS 58.19.55.88:15070",
        "SOCKS 58.19.55.88:15087",
        "SOCKS 58.19.55.4:15268",
        "SOCKS 58.19.55.4:15379",
        "SOCKS 115.127.36.190:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}