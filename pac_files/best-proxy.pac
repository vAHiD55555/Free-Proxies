function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.129.234.143:80",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 169.57.157.148:80",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 114.142.181.76:8080",
        "SOCKS 204.44.87.247:8888",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 54.221.172.63:80",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 3.14.227.50:80",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 14.224.57.211:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}