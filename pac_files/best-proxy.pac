function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 120.77.203.0:443",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 180.149.232.33:8080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 188.19.15.242:8080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 194.163.160.97:10808",
        "SOCKS 13.59.97.103:313",
        "SOCKS 8.213.197.208:100",
        "SOCKS 91.151.88.220:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}