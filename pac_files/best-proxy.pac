function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 3.14.227.50:80",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 5.181.178.94:8080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 157.175.170.170:943",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 3.137.32.100:80",
        "SOCKS 24.199.107.98:8080",
        "SOCKS 82.26.74.193:9004",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 103.28.121.58:80",
        "SOCKS 81.180.92.198:8080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 193.34.95.110:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}