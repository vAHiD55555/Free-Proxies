function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 42.96.16.158:1311",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 222.59.173.105:44144",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 80.75.213.22:3128",
        "SOCKS 47.238.205.61:8888",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 111.4.220.2:808",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 38.172.156.64:999",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 173.209.63.67:8173",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 188.165.233.121:9151",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}