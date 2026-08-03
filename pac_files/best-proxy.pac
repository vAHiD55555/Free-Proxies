function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.58.132.5:1080",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 36.37.251.137:8080",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 117.175.168.195:1080",
        "SOCKS 89.163.135.20:8236",
        "SOCKS 113.192.31.90:8080",
        "SOCKS 103.110.10.174:3300",
        "SOCKS 194.190.169.197:3701",
        "SOCKS 43.163.112.8:80",
        "SOCKS 89.169.168.25:6101",
        "SOCKS 178.170.181.118:1080",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 38.58.76.8:999",
        "SOCKS 45.150.33.211:1082",
        "SOCKS 47.76.149.237:1011",
        "SOCKS 146.190.60.147:8003",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 110.49.66.210:8080",
        "SOCKS 168.119.173.104:47486",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}