function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.249.48.227:3128",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 186.180.73.50:9090",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 142.54.237.38:4145",
        "SOCKS 114.80.32.8:3081",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 27.74.215.131:30245",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 18.143.165.238:9090",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 47.79.93.202:1122",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 221.1.104.177:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}