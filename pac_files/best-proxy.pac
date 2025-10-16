function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.56.89.191:1081",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 185.93.89.180:14720",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 185.93.89.187:8088",
        "SOCKS 185.93.89.143:8763",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 185.93.89.155:4100",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 185.93.89.181:9545",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}