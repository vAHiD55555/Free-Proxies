function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 35.180.188.216:80",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 193.181.35.133:8118",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 61.178.99.43:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}