function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.246.57:1080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 195.133.77.82:9963",
        "SOCKS 103.180.123.111:1080",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 120.77.203.0:443",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 178.62.116.7:1080",
        "SOCKS 8.212.153.179:8080",
        "SOCKS 72.10.160.170:6303",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 67.43.236.18:31319",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 61.160.66.130:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}