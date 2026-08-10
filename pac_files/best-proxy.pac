function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.85.88.18:8080",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 95.211.174.135:3128",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 103.93.93.170:8181",
        "SOCKS 147.45.221.112:1082",
        "SOCKS 66.59.197.62:3128",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 47.250.51.110:55443",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 47.89.159.212:137",
        "SOCKS 212.129.243.68:1143",
        "SOCKS 77.110.103.146:1080",
        "SOCKS 45.157.163.41:1080",
        "SOCKS 103.134.220.49:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 78.140.223.167:1080",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 43.138.214.122:9981",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}