function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.42.9.57:7201",
        "SOCKS 45.174.56.21:999",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 62.60.131.204:14150",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 103.56.205.84:8080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 62.60.131.203:4888",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 36.255.98.163:4249",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 194.246.82.89:13447",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 36.255.98.168:4185",
        "SOCKS 195.133.8.14:8080",
        "SOCKS 61.178.99.43:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}