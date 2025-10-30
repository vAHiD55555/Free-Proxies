function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.144.74.156:3620",
        "SOCKS 172.99.189.39:15604",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 160.20.146.24:8080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 72.10.160.172:19021",
        "SOCKS 47.236.169.53:1011",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 152.53.36.101:14509",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 117.74.65.207:80",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 44.251.173.250:368",
        "SOCKS 13.59.113.45:31280",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 81.71.36.158:3389",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}