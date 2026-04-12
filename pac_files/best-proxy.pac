function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.210.35.182:8080",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 45.136.131.35:8452",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 178.212.12.162:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 38.34.179.174:8453",
        "SOCKS 5.130.4.14:1081",
        "SOCKS 65.21.201.149:8080",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 45.167.125.21:999",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 27.124.81.146:8080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 206.123.156.236:4056",
        "SOCKS 120.224.234.71:7300",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}