function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.228.212.223:29272",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 94.159.112.138:3129",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 132.145.93.138:1080",
        "SOCKS 61.72.221.54:3128",
        "SOCKS 139.159.99.242:8080",
        "SOCKS 36.147.78.166:80",
        "SOCKS 69.164.245.247:1080",
        "SOCKS 104.248.203.234:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}