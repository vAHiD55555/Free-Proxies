function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.160:10783",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 181.78.202.28:8080",
        "SOCKS 202.62.59.138:1080",
        "SOCKS 202.43.162.2:8080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 185.202.59.66:3128",
        "SOCKS 221.202.27.194:10807",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 62.60.131.197:16515",
        "SOCKS 36.255.98.160:9980",
        "SOCKS 103.191.218.119:8199",
        "SOCKS 147.45.60.60:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}