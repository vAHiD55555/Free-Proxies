function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.0.162:7302",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 121.128.121.104:3128",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 93.90.231.101:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 14.56.118.184:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 78.85.237.52:1080",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 123.54.197.20:23276",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}