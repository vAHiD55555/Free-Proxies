function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.145:2005",
        "SOCKS 113.192.12.33:9898",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 200.174.198.158:8888",
        "SOCKS 185.93.89.155:4083",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 92.119.126.229:8118",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 45.225.181.254:8085",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 185.93.89.180:7475",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 185.93.89.158:8002",
        "SOCKS 13.212.76.113:8763",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 218.64.122.99:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}