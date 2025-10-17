function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.230.1.108:14070",
        "SOCKS 89.58.45.94:13321",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 185.93.89.183:4056",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 185.93.89.147:8084",
        "SOCKS 37.187.92.9:1026",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 113.160.37.152:53281",
        "SOCKS 176.119.36.76:1081",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 185.93.89.144:9386",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 185.93.89.182:9999",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 89.58.45.94:46224",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 121.42.9.57:7201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}