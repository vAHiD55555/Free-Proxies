function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 154.89.148.25:1080",
        "SOCKS 195.91.129.101:1337",
        "SOCKS 5.180.33.153:1080",
        "SOCKS 14.225.205.152:1081",
        "SOCKS 151.243.93.218:1080",
        "SOCKS 151.241.100.164:1080",
        "SOCKS 43.128.63.68:7890",
        "SOCKS 143.20.37.32:1080",
        "SOCKS 178.74.118.177:1080",
        "SOCKS 157.173.115.35:1081",
        "SOCKS 45.74.31.47:4596",
        "SOCKS 45.74.31.41:5431",
        "SOCKS 152.69.198.183:1080",
        "SOCKS 141.148.206.170:1088",
        "SOCKS 95.85.242.7:9050",
        "SOCKS 144.91.83.56:9050",
        "SOCKS 69.174.54.107:10134",
        "SOCKS 103.216.49.147:1080",
        "SOCKS 72.56.32.184:1080",
        "SOCKS 52.128.241.106:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}