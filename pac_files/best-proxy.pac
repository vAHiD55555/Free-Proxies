function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.180:4187",
        "SOCKS 36.255.98.167:4504",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 36.255.98.151:9963",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 185.244.77.62:1080",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 36.255.98.177:9494",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 117.18.20.66:8085",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 47.86.41.142:1024",
        "SOCKS 62.60.131.183:4554",
        "SOCKS 174.138.61.184:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}